import { pool, type Queryable } from '../db.js';

export const createDefaultUserSettings = async (
  userId: string,
  queryable: Queryable = pool,
): Promise<void> => {
  await queryable.query(
    `insert into user_settings (user_id, daily_goals)
     values ($1, null)
     on conflict (user_id) do nothing`,
    [userId],
  );
};
