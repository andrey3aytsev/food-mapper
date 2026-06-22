export const getApiBaseUrl = (): string => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL ?? '';

  if (baseUrl.endsWith('/')) {
    return baseUrl.slice(0, -1);
  }

  return baseUrl;
};
