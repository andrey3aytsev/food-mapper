import type { LoginRequest } from '@food-mapper/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { login, saveAuthSession } from '../../api/auth';
import { ROUTES } from '../../routes/paths';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (body: LoginRequest) => {
      return login(body);
    },
    onSuccess: (response) => {
      saveAuthSession(response);
      navigate(ROUTES.profile, { replace: true });
    },
  });
};
