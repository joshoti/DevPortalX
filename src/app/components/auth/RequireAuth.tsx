import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// Checks to see if a user is logged in or not
export const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.auth ? (
    <Outlet />
  ) : (
    <Outlet />
    // <Navigate to="/login" state={{ from: location }} replace />
  );
};
