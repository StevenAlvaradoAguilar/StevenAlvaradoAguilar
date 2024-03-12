import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import LoadingIcon from "./components/icons/Loading.svg"

// import i18n (needs to be bundled ;))
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="text-6xl animate-bounce animate-infinite animate-ease-in-out animate-normal">
          <img src={LoadingIcon} alt="Loading" />
          </div>
        </div>
      }
    >
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
