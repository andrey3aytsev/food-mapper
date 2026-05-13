/** Starter rows for local dev, loosely aligned with public low-FODMAP guides—not medical advice. */

export type FoodReferenceSeedRow = {
  id: string;
  name: string;
  fodmapCategory: 'fructans' | 'gos' | 'lactose' | 'fructose' | 'polyols';
  fodmapLevel: 'low' | 'moderate' | 'high';
  safeServingSize: number;
  safeServingUnit: string;
  notes: string;
};

export const FOOD_REFERENCE_SEED_ROWS: readonly FoodReferenceSeedRow[] = [
  {
    id: '38472463-4d7e-4771-b531-5553e1357ddf',
    name: 'White wheat bread',
    fodmapCategory: 'fructans',
    fodmapLevel: 'moderate',
    safeServingSize: 52,
    safeServingUnit: 'g',
    notes:
      'Fructans from wheat (fermentable oligosaccharides). Monash-listed portions: one slice often falls in moderate (amber) territory; lowest-FODMAP “green” limits depend on loaf type.',
  },
  {
    id: '8b3ced6a-16c3-4652-8155-487ed46d5c47',
    name: 'Garlic (raw)',
    fodmapCategory: 'fructans',
    fodmapLevel: 'high',
    safeServingSize: 1,
    safeServingUnit: 'g',
    notes:
      'Very high fructans; typical cooking amounts usually score high-FODMAP. Public guides treat only trace amounts as low-FODMAP.',
  },
  {
    id: 'bfd960e1-70da-49f3-a9e6-201ce2dfa852',
    name: "Cow's milk (regular)",
    fodmapCategory: 'lactose',
    fodmapLevel: 'high',
    safeServingSize: 12,
    safeServingUnit: 'ml',
    notes:
      'Lactose load rises quickly by volume; lactose-free milk at the same volume is generally low-FODMAP in equivalent references.',
  },
  {
    id: '2f6d3ae4-9e16-4b96-8b3b-bdd0b2248b0d',
    name: 'Cheddar cheese',
    fodmapCategory: 'lactose',
    fodmapLevel: 'low',
    safeServingSize: 40,
    safeServingUnit: 'g',
    notes:
      'Hard cheese loses most lactose with whey; common portions are often listed as low-FODMAP in published tables.',
  },
  {
    id: '696c8478-e75d-41e5-b2ba-9a593f45062f',
    name: 'Pear',
    fodmapCategory: 'fructose',
    fodmapLevel: 'high',
    safeServingSize: 25,
    safeServingUnit: 'g',
    notes:
      'Excess fructose vs glucose plus sorbitol (polyol); whole fruit servings are commonly high-FODMAP, with small wedges still limited.',
  },
  {
    id: '2b5a7e8d-7ae5-4ad6-9614-b66a6cefdb34',
    name: 'Green apple',
    fodmapCategory: 'fructose',
    fodmapLevel: 'moderate',
    safeServingSize: 20,
    safeServingUnit: 'g',
    notes:
      'Free fructose; a small peeled slice may sit near moderate limits while a whole large apple often exceeds thresholds in Monash listings.',
  },
  {
    id: '83dfa135-5083-45ee-8881-97b64f7b4caa',
    name: 'Chickpeas, canned (drained / rinsed)',
    fodmapCategory: 'gos',
    fodmapLevel: 'moderate',
    safeServingSize: 35,
    safeServingUnit: 'g',
    notes:
      'GOS in legumes; draining and rinsing canned pulses lowers FODMAPs—portion limits follow common Monash chickpea listings.',
  },
  {
    id: '16402523-4fd3-4b29-97d8-a0894b1ae610',
    name: 'Peanut, roasted',
    fodmapCategory: 'gos',
    fodmapLevel: 'low',
    safeServingSize: 32,
    safeServingUnit: 'g',
    notes:
      'Lower GOS than many beans/lentils at equal weight; peanuts often carry a workable “green” serve in comparison tables.',
  },
  {
    id: 'c6fa257d-ac59-4718-8dcd-3199dc9bc986',
    name: 'Button mushroom (raw)',
    fodmapCategory: 'polyols',
    fodmapLevel: 'moderate',
    safeServingSize: 24,
    safeServingUnit: 'g',
    notes:
      'Mannitol (polyol); typical salad or garnish amounts cluster around moderate/high depending on gram weight.',
  },
  {
    id: '6a6ce45b-c2b6-425a-8b6d-d67b3af1a0de',
    name: 'Celery stalk (raw)',
    fodmapCategory: 'polyols',
    fodmapLevel: 'low',
    safeServingSize: 10,
    safeServingUnit: 'g',
    notes:
      'Contains mannitol; small diced amounts in soups and salads frequently stay within low-FODMAP bounds in guide portions.',
  },
];
