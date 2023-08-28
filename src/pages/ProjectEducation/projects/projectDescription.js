import { Link } from "react-router-dom";

import "./projectDescription.css";

function ProjectDescription() {
  return (
    <div className="project-demos">
      <h1 className="demo-header">Project Demos</h1>
      <div className="video-container-wrapper">
        <div className="video-container">
          <h1> Rudimentary IoT Health Monitoring System</h1>
          <iframe
            className="project-video"
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/h1rZbg2Dc6M`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded capstone vide"
          />
        </div>
      </div>

      <Link className="back-button" to="/ProjectEducation">
        Back to home
      </Link>
    </div>
  );
}

export default ProjectDescription;
