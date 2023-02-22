import React,{useState} from "react";
import { Jobdata } from "./JobData";
import JobCard from "./JobCard";

const JobCardSidebar = ({ setJobId }) => {
    const [border, setBorder] = useState("none");
  const handleOnClick = (id) => {
    setJobId(id);
    setBorder("1px solid #816797");
  };
  return (
    <div style={{ height: "100%" }}>
      {Jobdata.map((job) => {
        return (
          <JobCard
            onclick={() => handleOnClick(job.id)}
            border={border}
            name={job.jobTitle}
            companyName={job.company}
            impressions={job.impressions}
            daysleft={job.daysleft}
          />
        );
      })}
    </div>
  );
};

export default JobCardSidebar;
