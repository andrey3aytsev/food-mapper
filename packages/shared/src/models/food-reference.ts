import type { FodmapCategory, FodmapLevel } from '../enums/index.js';

export interface FoodReference {
  id: string;
  name: string;
  fodmapCategory: FodmapCategory;
  fodmapLevel: FodmapLevel;
  safeServingSize: number;
  safeServingUnit: string;
  notes: string;
}
