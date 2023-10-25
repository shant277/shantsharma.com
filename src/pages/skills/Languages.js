import React from "react";
import { motion } from "framer-motion";
import FlipCard from "../../components/flipCard";
import "./Languages.css";

function Languages(props) {
  const skillVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.5,
      },
    },
    tap: { scale: 0.9 },
  };
  return (
    <div>
      <h4 className="languages-title">Languages</h4>
      <div className="languages-container" id="skills">
        {props.Languages.map((language) => (
          <motion.div
            variants={skillVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <ul>
              <FlipCard name={language.language} icon={language.icon} />
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Languages;
