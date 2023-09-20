import "./BulletPoints.css";

function BulletPoints(props) {
  return (
    <p>
      {/* Print out contents of string array as list objects*/}
      {props.content.map((line) => (
        <p style={{ lineHeight: "1.5" }} className="info-card">
          {line}
        </p>
      ))}
    </p>
  );
}
export default BulletPoints;
