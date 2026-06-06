import type { CatalogSnapshot } from './catalog-snapshot.js';
import type { Nutrients } from './nutrients.js';
import type { Portion } from './portion.js';

export type UserProduct = {
  id: string;
  userId: string;
  name: string;
  portion?: Portion;
  nutrients?: Nutrients;
  isFavorite: boolean;
  lastUsedAt: string;
  usageCount: number;
  catalogSnapshot?: CatalogSnapshot;
  createdAt: string;
};
