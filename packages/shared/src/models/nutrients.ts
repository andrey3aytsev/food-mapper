export type Nutrients = {
  calories?: number;
  protein?: number;
  fat?: number;
  carbs?: number;
};

export type NutrientsField = keyof Nutrients;
