import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Test - 15/12/2025

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
