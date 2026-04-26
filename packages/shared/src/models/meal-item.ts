export interface MealItem {
  id: string;
  mealEntryId: string;
  foodReferenceId: string | null;
  customName: string;
  servingSize: number;
  servingUnit: string;
}
