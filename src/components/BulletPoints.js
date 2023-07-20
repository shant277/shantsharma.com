function BulletPoints(props) {
  return (
    <p>
      {/* Print out contents of string array as list objects*/}
      {props.content.map((line) => (
        <li>{line}</li>
      ))}
    </p>
  );
}
export default BulletPoints;
