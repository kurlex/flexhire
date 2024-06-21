import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import ProfilePage from "./Components/Profile/ProfilePage";
import NotFoundPage from "./Components/NotFound/NotFoundPage";
import PrivateRoutes from "./Components/PrivateRoutes";
import { RelayEnvironmentProvider } from "react-relay";
import createRelayEnvironment from "./RelayEnvironment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route element={<PrivateRoutes />}>
        <RelayEnvironmentProvider
          environment={createRelayEnvironment(
            localStorage.getItem("flex-api-key")!
          )}
        >
          <Route path="/Profile" element={<ProfilePage />} />
        </RelayEnvironmentProvider>
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
