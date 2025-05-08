import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import AdLogement from "./pages/AddLogement";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoadingScreen from "./components/LoadingScreen";
import LogementDetail from "./pages/LogementDetail";
import UserPage from "./pages/UserPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/addLogement" element={<AdLogement />} />
        <Route path="logementDetail/:id" element={<LogementDetail />} />
        <Route path="userPage/:id" element={<UserPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
