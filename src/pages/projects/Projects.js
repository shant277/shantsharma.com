import React from "react";
import ProjectCards from "./projectCards";

function Projects(props) {
  return (
    <div className="info-card" id="projects">
      <ProjectCards projects={props.projects}></ProjectCards>
    </div>
  );
}
export default Projects;
