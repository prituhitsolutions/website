# PrituhIT Solutions – PERN website

PostgreSQL + Express + React (Vite) + Node.js. Dark navy hero, teal/cyan accents, all 23 sections from the brief.

## Setup

```bash
npm run install:all
createdb prituhit                      # or create the DB on Neon / Supabase / Render
cp server/.env.example server/.env     # edit DATABASE_URL and ADMIN_KEY
cp client/.env.example client/.env     # optional: company email + site URL
npm run db:init                        # creates tables
npm run dev                            # web http://localhost:5173  ·  api http://localhost:5000
```

Production: `npm run build` then `npm start` (Express serves `client/dist` and `/api`).

## API

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/enquiries` | Contact form (validated, rate-limited, honeypot) |
| GET | `/api/enquiries` | Read enquiries. Needs header `x-admin-key: <ADMIN_KEY>` |
| GET | `/api/projects` | Published portfolio projects |
| GET | `/api/testimonials` | Published testimonials |
| GET | `/api/stats` | Business impact numbers |

## Adding real content (nothing is invented)

Until you add data, the site shows placeholders ("[XX]+", "Client Name", sample project cards).

```sql
UPDATE site_stats SET value = 50 WHERE key = 'projects';       -- projects, clients, years, satisfaction

INSERT INTO projects (title, client, industry, category, services, description, project_url, published)
VALUES ('Project title', 'Client', 'Education', 'Websites', ARRAY['Design','Development'], 'What we delivered.', 'https://…', true);
-- category: Websites | Web Apps | Mobile Apps | UI/UX | Software

INSERT INTO testimonials (quote, author, organization, published) VALUES ('Real quote', 'Name', 'Company', true);
```

Stats appear once a value is set; counters animate only for those real numbers.

## Before launch

- Replace `https://www.example.com` in `client/index.html`, `client/public/sitemap.xml` and `robots.txt` with the live domain.
- Add `client/public/og-image.png` (1200×630) for social sharing.
- Set `VITE_CONTACT_EMAIL` and `VITE_SITE_URL` in `client/.env`.
- Privacy Policy / Terms links currently point to the top of the page; add real pages.
- Enquiries are stored in PostgreSQL only. Add an email notification (e.g. Nodemailer) in `server/src/routes.js` if you want alerts.
