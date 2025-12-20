import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Main - 20/12/25

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
