import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../api/auth';
import { ROUTES } from '../../routes/paths';

import { meQueryKey } from './use-me';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logout(),
    onSettled: () => {
      queryClient.removeQueries({ queryKey: meQueryKey });
      navigate(ROUTES.login, { replace: true });
    },
  });
};
