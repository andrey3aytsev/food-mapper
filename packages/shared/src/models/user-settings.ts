import type { DailyGoals } from './daily-goals.js';

export type UserSettings = {
  userId: string;
  dailyGoals?: DailyGoals;
  updatedAt: string;
};

export type UserSettingsField = keyof UserSettings;
