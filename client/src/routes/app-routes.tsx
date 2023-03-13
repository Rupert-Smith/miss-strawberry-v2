import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "features/home";
import { Login } from "features/auth/login";
import { Settings } from "features/settings";
import { FeatureManager } from "features/feature-manager";
import { ForgotPassword } from "features/auth/forgot-password";
import { CreateAccount } from "features/auth/create-account";
import ProtectedRoutes from "./components/protected-routes";
import useGetSidebarOptions from "common/components/sidebar/hooks/use-get-sidebar-options";
import { directories } from "constants/recipe-constants";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* Protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="recipes/search" element={<FeatureManager />} />
          <Route path="/new-recipe" element={<FeatureManager />} />
          <Route path="/recipe" element={<FeatureManager />} />
          <Route path="recipes/favourites" element={<FeatureManager />} />
          {directories.map((categoryDirectory) => {
            return (
              <Route
                path={`/recipes/${categoryDirectory.value}`}
                element={<FeatureManager />}
              />
            );
          })}
          <Route path="/recipes/desserts" element={<FeatureManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
