import "./Technologies.css";

function Technologies(props) {
  return (
    <div>
      <h4 className="technologies-title">Technologies</h4>
      <div className="technologies-container" id="skills">
        {/* 
       <BulletPoints content={props.skills}></BulletPoints> */}
        {/* Print out contents of string array as list objects*/}
        {props.Technologies.map((line) => (
          <div className="skill-card">
            <ul>{line}</ul>
            </div>
            
        ))}
      </div>
    </div>
  );
}
export default Technologies;
