import type { MealType } from '../enums/meal-type.js';

export type Meal = {
  id: string;
  dayId: string;
  type: MealType;
  occurredAt?: string;
  createdAt: string;
};
