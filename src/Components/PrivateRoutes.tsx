import React from "react";
import { Outlet } from "react-router-dom";
import StartPage from "./StartPage/StartPage";

const PrivateRoutes = () => {
  const storedApiKey = localStorage.getItem("flex-api-key");
  return storedApiKey ? <Outlet /> : <StartPage />;
};

export default PrivateRoutes;
