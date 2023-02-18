import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import JobCard from "../components/JobCard";
import JobInformation from "../components/JobInformation";
import styled from "styled-components";
import { Jobdata } from "../components/JobData";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";
const JobStudent = () => {
  const [jobId, setJobId] = useState(1);

  const handleOnClick = (id)=>{
    setJobId(id)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
          overflowX: "hidden",
        }}
      >
        <NavbarMain />
        <JobContainer>
          <div className="jobCardSidebar">
            <div style={{ height: "100%" }}>
              {Jobdata.map((job) => {
                return (
                  <JobCard
                    onclick={()=> handleOnClick(job.id)}
                    name={job.jobTitle}
                    companyName={job.company}
                    impressions={job.impressions}
                    daysleft={job.daysleft}
                  />
                );
              })}
            </div>
          </div>
          <div className="jobInformationWindow">
            <JobInformation id={jobId} />
            <JobDeadLineCard id={jobId} />
            <JobAdditionalInfomationCard id={jobId} />
          </div>
        </JobContainer>
      </div>
    </>
  );
};

const JobContainer = styled.div`
  display: flex;
  margin: 0 3rem;
  margin-top: 6rem;
  height: 100%;
  justify-content: flex-end;

  .jobCardSidebar {
    display: flex;
    flex-direction: column;
    width: 30%;
    overflow-y: auto;
    height: 100vh;
    position: fixed;
    left: 5%;
  }

  .jobInformationWindow {
    display: flex;
    width: 60%;
    margin-left: 40px;
    flex-direction: column;
  }
`;

export default JobStudent;
