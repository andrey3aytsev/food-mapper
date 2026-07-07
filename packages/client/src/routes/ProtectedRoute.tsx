import { Navigate, Outlet } from 'react-router-dom';

import { authStorage } from '../api/auth-storage';
import { ROUTES } from './paths';

export const ProtectedRoute = () => {
  const hasToken = authStorage.getToken() !== null;

  if (!hasToken) {
    return <Navigate to={ROUTES.login} replace />;
  }

  return <Outlet />;
};
