import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "virtual:windi.css";
import AppProvider from "./provider/AppProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
