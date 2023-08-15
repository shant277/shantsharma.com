import Timeline from "@mui/lab/Timeline";
import TimeCard from "./timeCard";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

function MyTimeline() {
  return (
    <Timeline position="left"  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          paddingTop: 45
        },
      }}
      >
      <TimeCard content="DATE" />
      <TimeCard content="DATE2" />
      <TimeCard content="DATE3" />
      <TimeCard content="DATE4" />
    </Timeline>
  );
}

export default MyTimeline;
