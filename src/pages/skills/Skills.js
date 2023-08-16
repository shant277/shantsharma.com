import { languages, technologies } from "../../constants/Constants";
import Languages from "./Languages";
import Technologies from "./Technologies";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../constants/Constants.js";

import "./Skills.css";

function Skills() {
  return (
    <motion.div
      className="skills-container"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="skills-title-container">
        <h3 className="skills-title">Skills</h3>
      </div>
      <Languages Languages={languages}></Languages>
      <Technologies Technologies={technologies}></Technologies>
    
    </motion.div>  
  );
}

export default Skills;
