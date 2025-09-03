import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting.jsx";
import App from "./App.jsx";
import Animals from "./Animals.jsx";
import AnimalsNotDestructured from "./AnimalsNotDestructured.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Animals />
  </StrictMode>
);
