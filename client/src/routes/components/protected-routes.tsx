import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";

const ProtectedRoutes = () => {
  const location = useLocation();

  const authorisedConfig = useSelector(
    (state: RootState) => state.auth.authorisedConfig
  );

  return authorisedConfig.authorised ? (
    <Outlet />
  ) : (
    <Navigate to="/login" /> // once the user is authenticated, replace "/login" with the initial directory that was requested
    // <Navigate to="/login" state={{ from: location }} replace /> // once the user is authenticated, replace "/login" with the initial directory that was requested
  );
};

export default ProtectedRoutes;
