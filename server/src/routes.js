import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { pool } from './db.js';

const router = Router();
const CATEGORIES = ['Websites', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Software'];

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many enquiries from this connection. Please try again later.' },
});

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

router.get('/health', (_req, res) => res.json({ ok: true }));

router.get('/projects', async (req, res, next) => {
  try {
    const { category } = req.query;
    const params = [];
    let where = 'WHERE published = true';
    if (category && CATEGORIES.includes(category)) {
      params.push(category);
      where += ` AND category = $${params.length}`;
    }
    const { rows } = await pool.query(
      `SELECT id, title, client, industry, category, services, description, image_url, project_url
       FROM projects ${where} ORDER BY sort_order, id`, params);
    res.json(rows);
  } catch (e) { next(e); }
});

router.get('/testimonials', async (_req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, quote, author, organization, rating FROM testimonials
       WHERE published = true ORDER BY sort_order, id`);
    res.json(rows);
  } catch (e) { next(e); }
});

router.get('/stats', async (_req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT key, label, value, suffix FROM site_stats ORDER BY sort_order');
    res.json(rows.map((r) => ({ ...r, value: r.value === null ? null : Number(r.value) })));
  } catch (e) { next(e); }
});

router.post('/enquiries', enquiryLimiter, async (req, res, next) => {
  try {
    const b = req.body || {};
    // Honeypot: real users never fill this hidden field.
    if (b.website_url) return res.status(201).json({ ok: true });

    const data = {
      name: clean(b.name, 120),
      company: clean(b.company, 160),
      email: clean(b.email, 160),
      phone: clean(b.phone, 40),
      service: clean(b.service, 120),
      budget: clean(b.budget, 80),
      message: clean(b.message, 3000),
    };
    const errors = {};
    if (data.name.length < 2) errors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
    if (data.phone && !/^[+()\d\s-]{7,20}$/.test(data.phone)) errors.phone = 'Please enter a valid phone number.';
    if (data.message.length < 10) errors.message = 'Please describe your project in at least 10 characters.';
    if (Object.keys(errors).length) return res.status(400).json({ error: 'Please fix the highlighted fields.', errors });

    await pool.query(
      `INSERT INTO enquiries (name, company, email, phone, service, budget, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [data.name, data.company, data.email, data.phone, data.service, data.budget, data.message]);
    res.status(201).json({ ok: true });
  } catch (e) { next(e); }
});

// Protected read for the team: GET /api/enquiries with header x-admin-key
router.get('/enquiries', async (req, res, next) => {
  try {
    const key = process.env.ADMIN_KEY;
    if (!key || req.get('x-admin-key') !== key) return res.status(401).json({ error: 'Unauthorized' });
    const { rows } = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 200');
    res.json(rows);
  } catch (e) { next(e); }
});

export default router;
