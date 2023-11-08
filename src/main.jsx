import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "src/setup/styles/setupStyles.js";
import Router from "src/setup/routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>
);
