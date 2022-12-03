import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext } from "styled-components";

import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
