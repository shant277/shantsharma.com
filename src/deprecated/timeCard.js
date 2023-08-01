import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./timeCard.css";

function TimeCard(props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className="time-dot" color="primary">
          {" "}
          <FontAwesomeIcon icon={icon({ name: "circle-dot", style: "solid" })} />{" "}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{props.content}</TimelineContent>
    </TimelineItem>
  );
}

export default TimeCard;
