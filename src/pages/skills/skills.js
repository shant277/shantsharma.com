import "./skills.css";

function Skills(props) {
  return (
    <div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container" id="skills">
        {/* 
       <BulletPoints content={props.skills}></BulletPoints> */}
        {/* Print out contents of string array as list objects*/}
        {props.skills.map((line) => (
          <div className="skill-card">
            <ul>{line}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
