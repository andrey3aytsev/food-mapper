export const WellnessCheckType = {
  AfterMeal: 'afterMeal',
  DaySummary: 'daySummary',
  Quick: 'quick',
} as const;

export type WellnessCheckType = (typeof WellnessCheckType)[keyof typeof WellnessCheckType];
