import Education from "./Education/Education";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
    pageStyle,
    projects_,
} from "../../constants/Constants.js";

import "./ProjectEducation.css";
import { useState } from "react";
import ProjectCard from "../../components/Cards/HoverCard";

function ProjectEducation() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

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
                <ProjectCard data={project} index={index}>
              </ProjectCard>
            ))}
                      
          </div>
          <div className="project-button-wrapper">
            <Link
              to="/projectDescription"
              className="project-button"
              id="project-link"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div id="translate"></div>
              <a href="/">Detailed project descriptions</a>
            </Link>
            {showTooltip && (
              <div className="tooltip">
                This button leads to project demos/showcases. This is still a
                work in progress, but feel free to check it out as I begin to
                fill this page with projects!
              </div>
            )}
          </div>
          <h1 className="timeline-title">Education</h1>
        </div>
        <Education />
      </div>
    </motion.div>
  );
}

export default ProjectEducation;
