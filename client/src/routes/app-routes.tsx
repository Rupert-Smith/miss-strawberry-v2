import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "features/home";
import { Login } from "features/auth/login";
import { Settings } from "features/settings";
import { FeatureManager } from "features/feature-manager";
import { ForgotPassword } from "features/auth/forgot-password";
import { CreateAccount } from "features/auth/create-account";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/search" element={<FeatureManager />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
