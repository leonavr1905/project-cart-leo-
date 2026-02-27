import { Navigate } from 'react-router-dom';
import { useStore } from './StoreContext';

const ProtectedRoute = ({ children }) => {
  const { state } = useStore();
  return state.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;