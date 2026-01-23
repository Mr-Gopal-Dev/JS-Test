import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Branch 1 - 23/01/26

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
