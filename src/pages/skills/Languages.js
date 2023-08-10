import "./Languages.css";

function Languages(props) {
  return (
    <div>
      <h4 className="languages-title">Languages</h4>
      <div className="languages-container" id="skills">
        {/* 
       <BulletPoints content={props.skills}></BulletPoints> */}
        {/* Print out contents of string array as list objects*/}
        {props.Languages.map((line) => (
          <div className="skill-card">
            <ul>{line}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Languages;
