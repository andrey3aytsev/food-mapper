import { z } from 'zod';

const nonNegativeGoalSchema = z
  .number({ error: 'Must be a number' })
  .nonnegative('Must be a non-negative number');

export const dailyGoalsSchema = z.object({
  calories: nonNegativeGoalSchema.optional(),
  protein: nonNegativeGoalSchema.optional(),
  fat: nonNegativeGoalSchema.optional(),
  carbs: nonNegativeGoalSchema.optional(),
});

export const patchSettingsRequestSchema = z.object({
  dailyGoals: dailyGoalsSchema,
});

export type PatchSettingsRequest = z.infer<typeof patchSettingsRequestSchema>;
