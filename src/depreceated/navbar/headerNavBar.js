//taken from https://www.thekrazydev.com/how-to-open-a-dropdown-menu-on-hover-in-react/ wtih modifications
// to work with my navbar component

import { useState, useRef, useEffect } from "react";
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

  const [showButton, setShowButton] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useEffect(() => {
    // Add an event listener to the scroll event
    const handleScroll = () => {
      const quarterPoint = window.innerHeight / 8; // Halfway point of the window's height
      const scrollPosition = window.scrollY; // Current scroll position

      // Check if scroll position is greater than or equal to the halfway point
      if (scrollPosition >= quarterPoint) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  NavbarHover(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div ref={dropdownRef} className="hoverButtonWrapper">
      {showButton && (
        <button
          class="hoverButton"
          onMouseOver={() => setMenuDropDownOpen(true)}
        >
          <FontAwesomeIcon icon={icon({ name: "bars", style: "solid" })} />{" "}
        </button>
      )}
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
