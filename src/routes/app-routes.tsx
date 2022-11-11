import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "features/home";
import { Settings } from "features/settings";
import { FeatureManager } from "features/feature-manager";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<FeatureManager />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
