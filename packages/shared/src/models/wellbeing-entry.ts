import type { WellbeingMetrics } from './wellbeing-metrics.js';

export interface WellbeingEntry {
  id: string;
  userId: string;
  timestamp: string;
  mealEntryId: string | null;
  metrics: WellbeingMetrics;
  comment: string;
}
