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

export const findUserByEmail = async (
  email: string,
): Promise<UserRow | null> => {
  const result = await pool.query<UserRow>(
    `select id, email, password_hash, created_at
     from users
     where email = $1`,
    [email],
  );

  return result.rows[0] ?? null;
};
