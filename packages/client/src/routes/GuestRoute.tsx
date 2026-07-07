import { Navigate, Outlet } from 'react-router-dom';

import { authStorage } from '../api/auth-storage';
import { ROUTES } from './paths';

export const GuestRoute = () => {
  const hasToken = authStorage.getToken() !== null;

  if (hasToken) {
    return <Navigate to={ROUTES.profile} replace />;
  }

  return <Outlet />;
};
