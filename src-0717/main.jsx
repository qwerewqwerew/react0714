import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import List from "./components/List.jsx";
createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
    <List />
  </StrictMode>,
);
