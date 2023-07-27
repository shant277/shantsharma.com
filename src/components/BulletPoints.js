import "./BulletPoints.css";

function BulletPoints(props) {
  return (
    <p>
      {/* Print out contents of string array as list objects*/}
      {props.content.map((line) => (
        <li className="info-card">{line}</li>
      ))}
    </p>
  );
}
export default BulletPoints;
