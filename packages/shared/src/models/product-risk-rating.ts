export type ProductRiskRating = {
  productKey: string;
  productName: string;
  riskScore: number;
  topSymptoms: {
    symptomId: string;
    symptomName: string;
    percentage: number;
  }[];
};
