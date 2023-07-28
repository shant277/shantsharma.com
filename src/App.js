import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ProjectDescription from "./pages/projects/projectDescription";
import "./App.css";

//https:shantsharma.com/
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {path: "/projectDescriptions", Element: <ProjectDescription/>},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
