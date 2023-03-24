import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { Loading } from "../components";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) <Loading />

  if (!user) return <Navigate to="/" replace />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute