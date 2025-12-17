import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Main - 18/12/2025 - 02

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
