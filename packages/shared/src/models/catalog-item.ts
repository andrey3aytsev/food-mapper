import type { Nutrients } from './nutrients.js';
import type { Portion } from './portion.js';

export type CatalogItem = {
  id: string;
  catalogId: string;
  name: string;
  attributes: Record<string, string>;
  groups: string[];
  nutrients?: Nutrients;
  portion?: Portion;
};
