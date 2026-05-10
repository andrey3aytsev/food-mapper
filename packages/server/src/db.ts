import { Pool } from 'pg';

const requireEnv = (name: string): string => {
  const value = process.env[name];

  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

const max = Number(process.env.PGPOOL_MAX ?? 10);

if (!Number.isFinite(max) || max < 1) {
  throw new Error('PGPOOL_MAX must be a positive number when set');
}

export const pool = new Pool({
  connectionString: requireEnv('DATABASE_URL'),
  max,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 10_000,
});

export const checkDbConnection = async (): Promise<void> => {
  const client = await pool.connect();

  try {
    await client.query('select 1');
  } finally {
    client.release();
  }
};
