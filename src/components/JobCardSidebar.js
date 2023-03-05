import React from "react";
import JobCardInfo from "./JobCardInfo";
import { useDispatch, useSelector } from "react-redux";
import { opportunitiesActions } from "../store/opportunities-slice";

const JobCardSidebar = (props) => {
  const sideBarData = props.sideBarData;
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
            eligibility={job.eligibility}
            selectedId={jobDescription ? jobDescription.id : false}
          />
        );
      })}
    </div>
  );
};

export default JobCardSidebar;
