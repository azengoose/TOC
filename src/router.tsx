//import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";

import App from "./App";

export default function Paths() {
  const location = useLocation();

  return (
    <>
      {/* <AnimatePresence exitBeforeEnter> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}
