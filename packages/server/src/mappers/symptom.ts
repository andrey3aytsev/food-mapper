import type { Symptom } from '@food-mapper/shared';

import { toIsoString } from './datetime.js';

export type SymptomRow = {
  id: string;
  user_id: string;
  name: string;
  sort_order: number;
  is_active: boolean;
  created_at: Date;
};

export const symptomFromRow = (row: SymptomRow): Symptom => {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    sortOrder: row.sort_order,
    isActive: row.is_active,
    createdAt: toIsoString(row.created_at),
  };
};
