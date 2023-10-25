import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    IoLogoReact,
  } from "react-icons/io5";
import "./flipCard.css";

function FlipCard(props) {
  const [flip, setFlip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    setFlip(!flip);
  };

    const handleHoverEnd = () => {
        setIsHovered(false);
        setFlip(false);
  };

  return (
    <motion.div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
      /* onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd} */
      >
          <div className="front">
              {props.name}
          </div>
          <div className="back">{props.icon}</div>
    </motion.div>
  );
}

export default FlipCard;
