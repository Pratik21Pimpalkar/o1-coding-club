import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Grid } from "@mui/material";

const SmallCard = (props) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.75rem",
        backgroundColor: 'transparent',
        border: '1px solid white',
        borderRadius: '1rem'
      }}
    >
      {props.children}
    </Box>
  );
};

const JobAdditionalInfomationCard = (props) => {
  const data = props.jobInfo

  return (
    <JobDescriptionContainer>
      <Typography variant="h5" fontWeight={700} component="h2">
        Additional Information
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "35px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Work Location
                </Typography>
                <Typography variant="body1" component="p">
                  {data.location}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
          {data.type === 'Job' && <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Experience
                </Typography>
                <Typography variant="body1" component="p">
                  {data.experience} Year(s)
                </Typography>
              </Box>
            </SmallCard>
          </Grid>}
          {data.type === 'Internship' && <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Duration
                </Typography>
                <Typography variant="body1" component="p">
                  {data.duration} Month(s)
                </Typography>
              </Box>
            </SmallCard>
          </Grid>}
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Work Timing
                </Typography>
                <Typography variant="body1" component="p">
                  {data.timing}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Working Days
                </Typography>
                <Typography variant="body1" component="p">
                  {data.workingDays}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  {data.type === 'Internship' ? 'Stipend / Month' : 'Salary / Year'}
                </Typography>
                <Typography variant="body1" component="p">
                  Rs. {data.salary}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  No. of Openings
                </Typography>
                <Typography variant="body1" component="p">
                  {data.noOfOpenings}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
          <Grid item md={4}>
            <SmallCard>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h6" component="p" fontWeight={600}>
                  Eligibility
                </Typography>
                <Typography variant="body1" component="p">
                  {data.eligibility}
                </Typography>
              </Box>
            </SmallCard>
          </Grid>
        </Grid>
      </div>
    </JobDescriptionContainer>
  );
};

export default JobAdditionalInfomationCard;

const JobDescriptionContainer = styled.div`
  background-color: #1b2430;
  color: #e5e5e5;
  padding: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1rem;

  .jobResponsibilities {
    margin-top: 10px;
  }
`;
