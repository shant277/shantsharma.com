import { Link } from "react-router-dom";

import "./projectDescription.css";

function ProjectDescription() {
  return (
    <div className="project-demos">
      <h1 className="demo-header">Project Demos</h1>
      <div className="video-container-wrapper">
        <div className="video-container">
          <h1> Rudimentary IoT Health Monitoring System</h1>
          <video controls className="video-player">
            <source
              src="https://youtu.be/h1rZbg2Dc6M"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="video-container">
          <h1> Video 2 Here</h1>
          <video controls className="video-player">
            <source
              src="https://youtu.be/h1rZbg2Dc6M"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <Link className="back-button" to="/ProjectEducation">Back to home</Link>
    </div>
  );
}

export default ProjectDescription;
