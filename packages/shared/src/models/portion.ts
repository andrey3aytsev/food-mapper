export type Portion = {
  amount?: number;
  unit?: string;
  label?: string;
};

export type PortionField = keyof Portion;
