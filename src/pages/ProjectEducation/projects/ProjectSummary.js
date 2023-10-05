import { motion } from "framer-motion";
import "./ProjectSummary.css";

function ProjectSummary({ data, open }) {
  const { project, projectIcon, projectSummary } = data;
  return (
    <motion.div
      className="project-card"
      onClick={open}
      whileHover={{ scale: 1.1 }}
    >
      {project}
      <div className="project-card__content">
        <div className="project-card__image-container">{projectIcon}</div>
        <div className="project-card__details">
          <div className="project-card__row">{projectSummary}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectSummary;
