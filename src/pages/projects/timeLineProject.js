import "./timeLineProject.css";

function TimeLineProject(props) {
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
    <section class="timeline education">
      <h2 class="timeline-title" id="education">
        Projects
      </h2>
   
      <ul class="timeline-items">
        {projectArray.map((project, index) => (
          <li class="timeline-item" key={index}>
            <h3>{project.title}</h3>
            <p>
              {/* Print out contents of string array as list objects*/}
              {project.description.map((line) => (
                <ul className="info-card">{line}</ul>
              ))}
            </p>
          </li>
        ))}
      </ul>
      

    </section>
  );
}

export default TimeLineProject;
