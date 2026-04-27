export const FodmapCategory = {
  Fructans: 'fructans',
  Gos: 'gos',
  Lactose: 'lactose',
  ExcessFructose: 'excessFructose',
  Polyols: 'polyols',
} as const;

export type FodmapCategory =
  (typeof FodmapCategory)[keyof typeof FodmapCategory];
