import type { Nutrients } from './nutrients.js';
import type { Portion } from './portion.js';

export type CatalogSnapshot = {
  catalogId: string;
  catalogItemId?: string;
  catalogName: string;
  itemName: string;
  attributes: Record<string, string>;
  groups: string[];
  nutrients?: Nutrients;
  portion?: Portion;
};
