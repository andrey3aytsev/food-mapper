export const toIsoString = (value: Date): string => {
  return value.toISOString();
};

export const fromIsoString = (value: string): Date => {
  return new Date(value);
};
