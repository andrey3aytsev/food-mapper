export const MealType = {
  Breakfast: 'breakfast',
  Lunch: 'lunch',
  Dinner: 'dinner',
  Snack: 'snack',
} as const;

export type MealType = (typeof MealType)[keyof typeof MealType];
