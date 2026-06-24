import type { RegisterRequest } from '@food-mapper/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { register, saveAuthSession } from '../../api/auth';
import { ROUTES } from '../../routes/paths';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (body: RegisterRequest) => {
      return register(body);
    },
    onSuccess: (response) => {
      saveAuthSession(response);
      navigate(ROUTES.profile, { replace: true });
    },
  });
};
