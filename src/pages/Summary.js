import "./Summary.css";
import BulletPoints from "../components/BulletPoints";

function Summary(props) {
  const intro = props.summary[0];
  const summary = props.summary.slice(1);

  return (
    <div className="summary" id="summary">
      <section id="about">
        <h2>About Me</h2>
        <p>{intro}</p>
        <BulletPoints content={summary}></BulletPoints>
      </section>
    </div>
  );
}

export default Summary;
