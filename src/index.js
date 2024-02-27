import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMePage from "./AboutMePage";

// import i18n (needs to be bundled ;))
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

