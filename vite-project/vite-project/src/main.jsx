import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 27/01/26 - 01

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
