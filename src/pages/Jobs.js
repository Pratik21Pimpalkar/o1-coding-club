import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import JobInformation from "../components/JobInformation";
import styled from "styled-components";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";
import JobFilter from "../components/JobFilter";
import JobCardSidebar from "../components/JobCardSidebar";
const JobStudent = () => {
  const [jobId, setJobId] = useState(1);

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
        <JobFilter/>
        <JobContainer>
          <div className="jobCardSidebar">
            <JobCardSidebar setJobId={setJobId} />
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
  margin-top: 11%;
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
