export const FodmapLevel = {
  Low: 'low',
  Moderate: 'moderate',
  High: 'high',
} as const;

export type FodmapLevel = (typeof FodmapLevel)[keyof typeof FodmapLevel];
