import React from "react";
import JobCardInfo from "./JobCardInfo";

import DUMMY_DATA from "./DummyData";

const JobCardSidebar = (props) => {

  return (
    <div style={{ height: "100%" }}>
      {DUMMY_DATA.map((job) => {
        return (
          <JobCardInfo
            key={job.id}
            id={job.id}
            name={job.name}
            title={job.title}
            deadlineDate={"27/01/2023"}
            type={job.type}
            experience={job.experience}
            location={job.location}
            duration={job.duration}
            changeId={props.changeId}
            selectedId={props.selectedId}
          />
        );
      })}
    </div>
  );
};

export default JobCardSidebar;
