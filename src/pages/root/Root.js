import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "./Root.css";

function Root() {
  return (
    <div className="app-wrapper-container">
      <Sidebar />
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
