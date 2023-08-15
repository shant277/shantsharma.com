import TimeLineProject from "./projects/timeLineProject";
import Education from "./Education/Education";
import { projects } from "../../constants/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition, pageStyle } from "../../constants/Constants.js";

import "./ProjectEducation.css";

function ProjectEducation() {
  return (
    <motion.div
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}>
      <h2 className="timeline-title" id="project-title">
        Projects
      </h2>
      <div className="wrapper-container">
        <div className="inner-wrapper">
          <div class="timelines" id="projects">
            <TimeLineProject projects={projects}></TimeLineProject>
          </div>
          <div className="project-button-wrapper">
            <Link
              to="/projectDescription"
              className="project-button"
              id="project-link"
            >
              <div id="translate"></div>
              <a href="/">Detailed project descriptions</a>
            </Link>
          </div>
          <h1 className="timeline-title">Education</h1>
        </div>
        <Education />
      </div>
    </motion.div>
  );
}

export default ProjectEducation;
