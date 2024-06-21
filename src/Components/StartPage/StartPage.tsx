import React, { ChangeEvent, useState } from "react";
import logo from "../../logo.svg";
import "./StartPage.css";

import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StartPage = () => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("");
  const onApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };
  const onSaveApiKey = () => {
    localStorage.setItem("flex-api-key", apiKey);
    navigate("/Profile");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="api-key-container">
          <input
            className="api-key-input"
            type="text"
            placeholder="API Key"
            value={apiKey}
            onChange={onApiKeyChange}
          />
          {apiKey.length > 0 && (
            <IconButton className="api-key-icon" onClick={onSaveApiKey}>
              <ArrowForwardIcon style={{ color: "white" }} />
            </IconButton>
          )}
        </div>
      </header>
    </div>
  );
};

export default StartPage;
