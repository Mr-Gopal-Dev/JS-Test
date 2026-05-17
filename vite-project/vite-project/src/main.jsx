import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 17/05/26 - 02

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
