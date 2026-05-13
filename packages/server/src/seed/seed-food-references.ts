import 'dotenv/config';

import { FOOD_REFERENCE_SEED_ROWS } from './food-references-seed-data.js';
import { pool } from '../db.js';

const upsertSql = `
  insert into food_references (
    id,
    name,
    fodmap_category,
    fodmap_level,
    safe_serving_size,
    safe_serving_unit,
    notes
  )
  values ($1, $2, $3, $4, $5, $6, $7)
  on conflict (id) do update set
    name = excluded.name,
    fodmap_category = excluded.fodmap_category,
    fodmap_level = excluded.fodmap_level,
    safe_serving_size = excluded.safe_serving_size,
    safe_serving_unit = excluded.safe_serving_unit,
    notes = excluded.notes
`;

export const seedFoodReferences = async (): Promise<number> => {
  const client = await pool.connect();

  try {
    await client.query('begin');

    let inserted = 0;

    for (const row of FOOD_REFERENCE_SEED_ROWS) {
      await client.query(upsertSql, [
        row.id,
        row.name,
        row.fodmapCategory,
        row.fodmapLevel,
        row.safeServingSize,
        row.safeServingUnit,
        row.notes,
      ]);
      inserted += 1;
    }

    await client.query('commit');
    return inserted;
  } catch (err) {
    await client.query('rollback');
    throw err;
  } finally {
    client.release();
  }
};

const main = async (): Promise<void> => {
  const count = await seedFoodReferences();
  console.info(`food_references: upserted ${count} rows`);
  await pool.end();
};

void main().catch(async (err) => {
  console.error(err);
  await pool.end().catch(() => {});
  process.exit(1);
});
