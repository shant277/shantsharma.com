import { languages, technologies } from "../../constants/Constants";
import Languages from "./Languages";
import Technologies from "./Technologies";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../constants/Constants.js";
import FlipCard from "../../components/flipCard";

import "./Skills.css";

const cards = [
    {
      id: "1",
      variant: "hover",
      front: "Hover",
      back: "Back"
    },
  ];

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

   {/*    <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} variant={"hover"} />
          ))}
        </div>
      </div>
    </div> */}
          
    </motion.div>  
  );
}

export default Skills;
