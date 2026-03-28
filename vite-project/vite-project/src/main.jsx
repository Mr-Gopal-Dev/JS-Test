import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 28/03/26 - 02

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
