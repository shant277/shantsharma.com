import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Sidebar.css";

const sideBarButtonVariants = {
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.9 },
  hoverOut: {
    scale: 1.0,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar-container">
      <motion.button
        className="sidebar-button"
        variants={sideBarButtonVariants}
        whileHover="hover"
        exit="hoverOut"
        whileTap="tap"
        onClick={() => handleClick("/")}
      >
        <Link className="sidebar-link" to="/" id="sidebar-link">
          <a href="/">About me</a>
        </Link>
      </motion.button>

      <motion.button
        className="sidebar-button"
        variants={sideBarButtonVariants}
        whileHover="hover"
        exit="hoverOut"
        whileTap="tap"
        onClick={() => handleClick("/ProjectEducation")}
      >
        <Link className="sidebar-link" to="/ProjectEducation" id="sidebar-link">
          <a href="/">Projects & Education</a>
        </Link>
      </motion.button>

      <motion.button
        className="sidebar-button"
        variants={sideBarButtonVariants}
        whileHover="hover"
        exit="hoverOut"
        whileTap="tap"
        onClick={() => handleClick("/Skills")}
      >
        <Link className="sidebar-link" to="/Skills" id="sidebar-link">
          <a href="/">Skills & Technologies</a>
        </Link>
      </motion.button>
    </div>
  );
}

export default Sidebar;
