import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
