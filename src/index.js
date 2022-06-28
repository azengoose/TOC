//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
