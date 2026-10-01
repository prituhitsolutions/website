import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import routes from './routes.js';

const app = express();
const PORT = process.env.PORT || 5000;
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../client/dist');

app.set('trust proxy', 1);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // inline JSON-LD in index.html
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'"],
    },
  },
}));
app.use(compression());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: '20kb' }));

app.use('/api', routes);
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// Production: serve the built React app
app.use(express.static(dist, { maxAge: '7d', index: false }));
app.get('*', (_req, res, next) => res.sendFile(path.join(dist, 'index.html'), (err) => err && next()));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
