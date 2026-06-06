import type { WellnessCheckType } from '../enums/wellness-check-type.js';

export type WellnessCheck = {
  id: string;
  userId: string;
  type: WellnessCheckType;
  dayId?: string;
  mealId?: string;
  symptomIds: string[];
  isAllGood: boolean;
  linkedMealEntryIds?: string[];
  occurredAt: string;
  createdAt: string;
};
