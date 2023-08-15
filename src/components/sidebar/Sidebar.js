import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {

  return (
    <div className="sidebar-container">
      <div className="sidebar-row">
        <ul>
          <li className="sidebar-item">
            <Link to="/" className="sidebar-button" id="sidebar-link">
            <a href="/">About me</a>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/ProjectEducation"
              className="sidebar-button"
              id="sidebar-link"
            >
              <a href="/">Projects & Education</a>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Skills" className="sidebar-button" id="sidebar-link">
              <a href="/">Skills & Technologies</a>
            </Link>
            <li className="sidebar-item">
              <Link to="/Test" className="sidebar-button" id="sidebar-link">
                <a href="/">Test</a>
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
