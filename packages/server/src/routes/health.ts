import { Router } from 'express';

import { checkDbConnection } from '../db.js';

export const healthRouter = Router();

healthRouter.get('/health', (_req, res) => {
  res.json({ ok: true });
});

healthRouter.get('/health/db', async (_req, res) => {
  try {
    await checkDbConnection();
    res.json({ ok: true });
  } catch {
    res.status(503).json({ ok: false, error: 'database_unreachable' });
  }
});
