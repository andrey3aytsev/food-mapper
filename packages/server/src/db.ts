import { Pool, type PoolClient } from 'pg';

export type Queryable = Pick<PoolClient, 'query'>;

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

export const withTransaction = async <T>(
  fn: (client: PoolClient) => Promise<T>,
): Promise<T> => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};
