export type WellbeingScore = 0 | 1 | 2 | 3 | 4 | 5;

export interface WellbeingMetrics {
  bloating: WellbeingScore;
  abdominalPain: WellbeingScore;
  general: WellbeingScore;
}
