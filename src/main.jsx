import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "src/setup/styles/setupStyles.js";
import Router from "src/setup/routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />

      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>
);
