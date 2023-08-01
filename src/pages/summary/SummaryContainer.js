import profilePicture from "../../pictures/pineapple_2060146.png";
import Summary from "./Summary";
import { summary } from "../../constants/Constants";
import "./SummaryContainer.css";

function SummaryContainer() {
  return (
    <div className="summary-container" id="summary">
      <div className="summary-child">
        <div className="profile-picture">
          <img src={profilePicture} className="profile-pic" alt="pineapple" />
        </div>
        <div className="about-me">About me</div>
      </div>
      <div className="summary-child">
        <div>
          <Summary summary={summary}></Summary>
        </div>
      </div>
    </div>
  );
}

export default SummaryContainer;
