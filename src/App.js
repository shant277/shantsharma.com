import React from "react";
import Root from "./pages/homePage/root/root";
import {
  Routes,
  Route,
  useLocation, 
} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ProjectDescription from "./pages/ProjectEducation/projects/projectDescription";
import ErrorPage from "./pages/Error";
import Test from "./pages/test/test";
import ProjectEducation from "./pages/ProjectEducation/ProjectEducation";
import Skills from "./pages/Skills/Skills";
import { AnimatePresence } from "framer-motion";

import "./App.css";

//https:shantsharma.com/
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Test", element: <Test /> },
      { path: "/HomePage", element: <HomePage />, index: true },
      { path: "/ProjectEducation", element: <ProjectEducation /> },
      { path: "/Skills", element: <Skills /> },
    ],
  },
  { path: "/projectDescription", element: <ProjectDescription /> },
]); */

function App() {
  /* return <RouterProvider router={router} />; */
   const location = useLocation();
   console.log(location);
   console.log(location.pathname); 
  return (
      <AnimatePresence mode="wait" location={location} key={location.pathname} >
        {" "}
        <Routes>
          {
            <Route path="/" element={<Root />}>
              <Route index element={<HomePage />} />
              <Route path="ProjectEducation" element={<ProjectEducation />} />
              <Route path="Skills" element={<Skills />} />
              <Route path="Test" element={<Test />} />
            </Route>
          }
          <Route path="/projectDescription" element={<ProjectDescription />} />
        </Routes>
      </AnimatePresence>
 
  );
}

export default App;
