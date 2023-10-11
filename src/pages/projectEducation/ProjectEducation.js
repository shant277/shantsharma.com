import Education from "./education/Education";
/* import { Link } from "react-router-dom";
 */ import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
  projects_,
} from "../../constants/Constants.js";
/* import { useState } from "react";
 */ import ProjectCard from "../../components/cards/hoverCard/HoverCard";

import "./ProjectEducation.css";

function ProjectEducation() {
  /*   const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  }; */

  return (
    <motion.div
      className="project-education-container"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2 className="timeline-title" id="project-title">
        Projects
      </h2>
      <div className="wrapper-container">
        <div className="inner-wrapper">
          <div className="timelines" id="projects">
            {projects_.map((project, index) => (
              <ProjectCard data={project} index={index}></ProjectCard>
            ))}
          </div>
          <h1 className="timeline-title">Education</h1>
          <Education />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectEducation;
