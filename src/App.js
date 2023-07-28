import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ProjectDescription from "./pages/projects/projectDescription";
import ErrorPage from "./pages/Error";
import "./App.css";

//https:shantsharma.com/
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/projectDescription", element: <ProjectDescription /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
