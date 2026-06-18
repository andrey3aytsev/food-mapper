import type { User } from '@food-mapper/shared';

import { pool } from '../db.js';
import { userFromRow, type UserRow } from '../mappers/index.js';

export type CreateUserInput = {
  email: string;
  passwordHash: string;
};

export const createUser = async (input: CreateUserInput): Promise<User> => {
  const result = await pool.query<UserRow>(
    `insert into users (email, password_hash)
     values ($1, $2)
     returning id, email, created_at`,
    [input.email, input.passwordHash],
  );

  return userFromRow(result.rows[0]);
};
