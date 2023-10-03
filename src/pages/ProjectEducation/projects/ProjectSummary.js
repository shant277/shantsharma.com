import pic from "../../../pictures/pineapple.png";
import { motion } from "framer-motion";
import "./ProjectSummary.css";

function ProjectSummary({ data, open }) {
    const { title, description, imageUrl } = data;
  return (
      <motion.div className="project-card" onClick={open} whileHover={{scale: 1.1}}>
      {title}
      <div className="project-card__content">
              <div className="project-card__image-container">
                  <img className="project-card__image" src={pic} alt="pineapple"/>
              </div>
              <div className="project-card__details">
                  <div className="project-card__row">Project coles notes version here</div>
              </div>
      </div>
    </motion.div>
  );
}

export default ProjectSummary;
