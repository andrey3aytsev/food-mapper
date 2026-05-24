export type DailyGoals = {
  calories?: number;
  protein?: number;
  fat?: number;
  carbs?: number;
};

export type DailyGoalsField = keyof DailyGoals;
