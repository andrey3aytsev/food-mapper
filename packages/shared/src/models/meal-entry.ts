import type { MealEntrySource } from '../enums/meal-entry-source.js';
import type { CatalogSnapshot } from './catalog-snapshot.js';
import type { Nutrients } from './nutrients.js';
import type { Portion } from './portion.js';

export type MealEntry = {
  id: string;
  mealId: string;
  name: string;
  portion: Portion;
  nutrients?: Nutrients;
  source: MealEntrySource;
  userProductId?: string;
  catalogSnapshot?: CatalogSnapshot;
  createdAt: string;
};
