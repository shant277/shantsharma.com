import React from "react";
import ProjectCards from "./projectCards";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects-outer-container" id="projects">
      <div className="project-header">
        <h2>My Projects - a summary</h2>
        </div>
      <ProjectCards projects={props.projects}></ProjectCards>
      <Link to="/projectDescription">Detailed project Descriptions</Link>
     
    </div>

  );
}
export default Projects;
