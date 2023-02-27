import React from "react";
import JobCardInfo from "./JobCardInfo";
import { useSelector } from "react-redux";

const JobCardSidebar = (props) => {
  const sideBarData = useSelector(state => state.opportunities.sideBarContent)
  const jobDescription = useSelector(state => state.opportunities.jobDescription)

  return (
    <div style={{ height: "100%" }}>
      {sideBarData.map((job) => {
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
            selectedId={jobDescription ? jobDescription.id : false}
          />
        );
      })}
    </div>
  );
};

export default JobCardSidebar;
