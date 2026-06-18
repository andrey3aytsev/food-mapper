export const MealEntrySource = {
  Manual: 'manual',
  Catalog: 'catalog',
  MyProduct: 'myProduct',
} as const;

export type MealEntrySource =
  (typeof MealEntrySource)[keyof typeof MealEntrySource];
