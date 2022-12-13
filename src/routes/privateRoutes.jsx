import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth';

function RequireAuth() {
  const { currentuser } = useAuth();

  if(!currentuser) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />;
}

export default RequireAuth;