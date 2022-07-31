// @ts-nocheck
import "./styles.css";
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./About";
import ParseAll from "./ParseAll";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<About />} />
        <Route path="/all" element={<ParseAll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
