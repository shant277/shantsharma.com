import BulletPoints from "../../components/BulletPoints";
import "./projectCards.css";

function projectCards(props) {
  //converts projects object containing a key value holding an array of arrays
  //into an array of objects dynamically containg the contents in that array
  //example:
  //key: project1, project2...etc.
  //[key][0]:"Rudimentary IoT Health Monitoring System",
  //[key][1]:  "Connected several sensors to an Arduino microcontroller",
  //          "Wrote a driver to allow interaction between sensors and the microcontroller",
  //          "Developed Android application to display information from sensors and upload to the cloud from sensors","
  // and so forth for the next key
  // makes it more readable, but my god is it a pain in the ass, will probably
  //refactor how projects is formatted in Constants.js
  const projectArray = Object.keys(props.projects).map((key) => ({
    title: props.projects[key][0],
    description: props.projects[key][1],
  }));

  return (
    <div className="project-container">
      <h2 className="info-card">My Projects</h2>
      {projectArray.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>
            <BulletPoints content={project.description} />
          </p>
          <p>A link to a demo/more description page will go here</p>
        </div>
      ))}
    </div>
  );
}
export default projectCards;
