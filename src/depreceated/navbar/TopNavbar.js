import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="top-navbar" id="top">
      <ul className="top-navbar_menu">
        <li
          className="top-navbar_item"
          onClick={() => scrollToSection("summary")}
        >
          About
        </li>
        <li
          className="top-navbar_item"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className="top-navbar_item"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="top-navbar_item"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
