export const symptomsApiPaths = {
  symptoms: '/api/symptoms',
} as const;

export const symptomByIdPath = (id: string): string =>
  `${symptomsApiPaths.symptoms}/${id}`;
