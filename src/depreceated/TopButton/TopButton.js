import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";

import "./TopButton.css";

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add an event listener to the scroll event
    const handleScroll = () => {
      const point = window.innerHeight ; // Bottom point of the window's height

      const scrollPosition = window.scrollY; // Current scroll position

      // Check if scroll position is greater than or equal to the halfway point
      if (scrollPosition >= point) {
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

  return (
    <div>
      {showButton && (
        <button
          class="top-button"
          onClick={handleScrollToTop}
          style={{ display: "block" }}
        >
          <FontAwesomeIcon icon={icon({ name: "arrow-up", style: "solid" })} />{" "}
        </button>
      )}
    </div>
  );
}

export default TopButton;
