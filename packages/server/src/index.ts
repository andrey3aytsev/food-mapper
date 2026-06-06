import 'dotenv/config';

import type {} from '@food-mapper/shared';
import cors from 'cors';
import express from 'express';

import { checkDbConnection, pool } from './db.js';
import { healthRouter } from './routes/index.js';

const app = express();
const port = Number(process.env.PORT ?? 3000);

if (!Number.isFinite(port) || port < 1) {
  throw new Error('PORT must be a positive number when set');
}

app.use(cors());
app.use(express.json());

app.use(healthRouter);

const shutdown = async (): Promise<void> => {
  await pool.end();
};

const main = async (): Promise<void> => {
  await checkDbConnection();

  const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  const onSignal = (signal: string) => {
    console.info(`Received ${signal}, closing...`);

    server.close(() => {
      void shutdown().finally(() => process.exit(0));
    });
  };

  process.once('SIGINT', () => onSignal('SIGINT'));
  process.once('SIGTERM', () => onSignal('SIGTERM'));
};

void main().catch(async (err) => {
  console.error(err);
  await shutdown().catch(() => {});
  process.exit(1);
});
