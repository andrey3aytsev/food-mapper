import type { Symptom } from '@food-mapper/shared';

import { pool, type Queryable } from '../db.js';
import { symptomFromRow, type SymptomRow } from '../mappers/symptom.js';

export const findSymptomsByUserId = async (
  userId: string,
  queryable: Queryable = pool,
): Promise<Symptom[]> => {
  const result = await queryable.query<SymptomRow>(
    `select id, user_id, name, sort_order, is_active, created_at
     from symptoms
     where user_id = $1
     order by sort_order asc, created_at asc`,
    [userId],
  );

  return result.rows.map(symptomFromRow);
};

export type CreateSymptomInput = {
  userId: string;
  name: string;
};

export const createSymptom = async (
  input: CreateSymptomInput,
  queryable: Queryable = pool,
): Promise<Symptom> => {
  const result = await queryable.query<SymptomRow>(
    `insert into symptoms (user_id, name, sort_order)
     values (
       $1,
       $2,
       (
         select coalesce(max(sort_order), -1) + 1
         from symptoms
         where user_id = $1
       )
     )
     returning id, user_id, name, sort_order, is_active, created_at`,
    [input.userId, input.name],
  );

  return symptomFromRow(result.rows[0]);
};
