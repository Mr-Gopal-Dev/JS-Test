import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Main - 19/12/2025 - 01

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
