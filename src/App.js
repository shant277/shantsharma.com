import React from "react";
import Root from "./pages/root/Root";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Routes location={location} key={location.pathname}>
        {
          <Route path="/" element={<Root />}>
            <Route index element={<AboutMe />} />
            <Route path="*" element={<Root />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
