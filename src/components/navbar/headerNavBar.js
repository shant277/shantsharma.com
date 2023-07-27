//taken from https://www.thekrazydev.com/how-to-open-a-dropdown-menu-on-hover-in-react/ wtih modifications
// to work with my navbar component

import { useState, useRef } from "react";
import Navbar from "./Navbar";
import { NavbarHover } from "./NavbarHover";
import "./headerNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { CSSTransition } from "react-transition-group";

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const nodeRef = useRef(null);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  NavbarHover(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div
      ref={dropdownRef}
      className="hoverButtonWrapper"
    >
      {
        <button
          class="hoverButton"
          onMouseOver={() => setMenuDropDownOpen(true)}
        >
          <FontAwesomeIcon icon={icon({ name: "bars", style: "solid" })} />{" "}
        </button>
      }
      <CSSTransition
        in={isMenuDropDownOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames="navbarHover"
        unmountOnExit
      >
        <div ref={nodeRef} className="navbarHover">
          <Navbar />
        </div>
      </CSSTransition>
    </div>
  );
}
