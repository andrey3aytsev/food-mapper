import type { MealItem } from './meal-item.js';

export interface MealEntry {
  id: string;
  userId: string;
  date: string;
  mealType: string;
  timestamp: string;
  items: MealItem[];
}
