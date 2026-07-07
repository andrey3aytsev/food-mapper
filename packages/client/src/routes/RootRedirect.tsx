import { Navigate } from 'react-router-dom';

import { authStorage } from '../api/auth-storage';
import { ROUTES } from './paths';

export const RootRedirect = () => {
  const hasToken = authStorage.getToken() !== null;

  return <Navigate to={hasToken ? ROUTES.profile : ROUTES.login} replace />;
};
