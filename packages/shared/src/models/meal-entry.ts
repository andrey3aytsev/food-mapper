import type { MealItem } from './meal-item.js';
import type { MealType } from '../enums/index.js';

export interface MealEntry {
  id: string;
  userId: string;
  date: string;
  mealType: MealType;
  timestamp: string;
  items: MealItem[];
}
