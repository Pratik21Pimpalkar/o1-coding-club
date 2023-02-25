import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import JobInformation from "../components/JobInformation";
import styled from "styled-components";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";
import JobFilter from "../components/JobFilter";
import JobCardSidebar from "../components/JobCardSidebar";
import DUMMY_DATA from "../components/DummyData";
import { Grid } from "@mui/material";
import JobDescription from "./JobDescription";
const JobStudent = () => {
  const [selectedId, setSelectedId] = useState(1);

  const handleViewApplication = (id) => {
    setSelectedId(id);
  }

  const handleFilterChange = () => { }

  const jobInfo = DUMMY_DATA.find(job => job.id === selectedId)
  console.log(jobInfo)

  return (
    <>
      <div
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
          overflowX: "hidden",
          minHeight: '100vh'
        }}
      >
        <NavbarMain />
        <JobFilter changeFilter={handleFilterChange} />
        <Grid container spacing={2} sx={{
          marginTop: '10rem',
          padding: '0rem 2rem 0rem 2rem',
        }}>
          <Grid item md={4} sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '1rem',
          }}>
            <JobCardSidebar selectedId={selectedId} changeId={handleViewApplication} />
          </Grid>
          <Grid item md={8} sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            paddingRight: '1rem',
          }}>
            <JobInformation jobInfo={jobInfo} selectedId={selectedId} />
            <JobDeadLineCard jobInfo={jobInfo} />
            <JobDescription jobInfo={jobInfo} />
            <JobAdditionalInfomationCard jobInfo={jobInfo} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default JobStudent;