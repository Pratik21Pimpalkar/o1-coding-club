import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import JobInformation from "../components/JobInformation";
import styled from "styled-components";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";
import JobFilter from "../components/JobFilter";
import JobCardSidebar from "../components/JobCardSidebar";
import DUMMY_DATA from "../components/DummyData";
import { Box, Grid } from "@mui/material";
import JobDescription from "./JobDescription";
import { useSelector } from "react-redux";
const JobStudent = () => {
  const jobDescription = useSelector(state => state.opportunities.jobDescription)
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
        <JobFilter />
        <Grid container spacing={2} sx={{
          marginTop: '10rem',
          padding: '0rem 2rem 0rem 2rem',
        }}>
          <Grid item md={jobDescription ? 4 : 12} sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '1rem',
            // display: 'flex',
            // justifyContent: 'center'
          }}>
            <Box sx={{
              maxWidth: '40vw',
              margin: 'auto'
            }}>
              <JobCardSidebar />
            </Box>
          </Grid>
          {<Grid item md={8} sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            paddingRight: '1rem',
          }}>
            {jobDescription && <JobInformation jobInfo={jobDescription} />}
            {jobDescription && <JobDeadLineCard jobInfo={jobDescription} />}
            {jobDescription && <JobDescription jobInfo={jobDescription} />}
            {jobDescription && <JobAdditionalInfomationCard jobInfo={jobDescription} />}
          </Grid>}
        </Grid>
      </div>
    </>
  );
};

export default JobStudent;