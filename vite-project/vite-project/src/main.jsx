import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 02/02/26 - 02

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
