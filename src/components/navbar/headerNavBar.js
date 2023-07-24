//taken from https://www.thekrazydev.com/how-to-open-a-dropdown-menu-on-hover-in-react/ wtih modifications
// to work with my navbar component

import { useState, useRef } from "react";
import Navbar from "./Navbar";
import { NavbarHover } from "./NavbarHover";
import "./headerNavbar.css";

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  NavbarHover(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div ref={dropdownRef}>
      <button
        class="hoverButton"
        onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
      >
        <i class="fa-solid fa-bars"></i>menu
      </button>
      {isMenuDropDownOpen && <Navbar />}
    </div>
  );
}
