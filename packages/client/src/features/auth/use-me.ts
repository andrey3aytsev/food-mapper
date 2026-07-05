import { useQuery } from '@tanstack/react-query';

import { getMe } from '../../api/auth';
import { authStorage } from '../../api/auth-storage';

export const meQueryKey = ['me'] as const;

export const useMe = () => {
  const hasToken = authStorage.getToken() !== null;

  return useQuery({
    queryKey: meQueryKey,
    queryFn: getMe,
    enabled: hasToken,
  });
};
