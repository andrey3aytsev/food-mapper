export const FodmapCategory = {
  Fructans: 'fructans',
  Gos: 'gos',
  Lactose: 'lactose',
  Fructose: 'fructose',
  Polyols: 'polyols',
} as const;

export type FodmapCategory =
  (typeof FodmapCategory)[keyof typeof FodmapCategory];
