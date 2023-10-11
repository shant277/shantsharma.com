import React, { useState, useEffect } from "react";
import Root from "./pages/root/Root";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectEducation from "./pages/projectEducation/ProjectEducation";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/loading/Loading";
import Skills from "./pages/skills/Skills";

import "./App.css";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading /> // Show loading screen while content is loading
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {
              <Route path="/" element={<Root />}>
                <Route index element={<AboutMe />} />
                <Route path="ProjectEducation" element={<ProjectEducation />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="*" element={<Root />} />
              </Route>
            }
            {/*         <Route path="/projectDescription" element={<ProjectDescription />} />
             */}
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
