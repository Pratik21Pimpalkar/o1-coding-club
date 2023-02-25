import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import JobDescription from "./JobDescription";
import styled from "styled-components";
import NavbarMain from "../components/NavbarMain";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";
import DUMMY_DATA from "../components/DummyData";
import JobInformation from "../components/JobInformation";

console.log(DUMMY_DATA)

const SpecificWork = () => {
  const { id } = useParams();
  const jobInfo = DUMMY_DATA.find(job => job.id == id)
  console.log(jobInfo)

  return (
    <div
      style={{
        backgroundColor: "#0b001a",
        scrollBehavior: "smooth",
        userSelect: "none",
        overflowX: "hidden",
      }}
    >
      <NavbarMain />
      <JobSpecificPageContainer>
        <Card className="jobDescriptionPageSpecefic">
          <JobInformation jobInfo={jobInfo} selectedId={jobInfo.id} isAdmin={true} />
          <JobDeadLineCard jobInfo={jobInfo} selectedId={jobInfo.id} />
          <JobDescription jobInfo={jobInfo} />
          <JobAdditionalInfomationCard jobInfo={jobInfo} />
        </Card>
      </JobSpecificPageContainer>
    </div>
  );
};

export default SpecificWork;

const JobSpecificPageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .styleInJobApplyButton {
    box-shadow: none;
  }

  .jobDescriptionPageSpecefic{
    width: 70%;
    background-color: rgb(11, 0, 26);
  }

`;
