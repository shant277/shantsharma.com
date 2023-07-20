import React from "react";
import BulletPoints from "../components/BulletPoints";

function Projects(props) {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <h3>{props.projects.project1[0]}</h3>
        <p>
          <BulletPoints content={props.projects.project1[1]}></BulletPoints>
        </p>
        <p>A link to a demo/more description page will go here</p>

        <h3>{props.projects.project2[0]}</h3>
        <p>
          <BulletPoints content={props.projects.project2[1]}></BulletPoints>
        </p>
        <p>A link to a demo/more description page will go here</p>

        <h3>{props.projects.project3[0]}</h3>
        <p>
          <BulletPoints content={props.projects.project3[1]}></BulletPoints>
        </p>
        <p>A link to a demo/more description page will go here</p>

        <h3>{props.projects.project4[0]}</h3>
        <p>
          <BulletPoints content={props.projects.project4[1]}></BulletPoints>
        </p>
        <p>A link to a demo/more description page will go here</p>
      </ul>
    </section>
  );
}
export default Projects;
