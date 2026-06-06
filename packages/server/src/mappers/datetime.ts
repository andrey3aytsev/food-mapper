export const toIsoString = (value: Date): string => value.toISOString();

export const fromIsoString = (value: string): Date => new Date(value);
