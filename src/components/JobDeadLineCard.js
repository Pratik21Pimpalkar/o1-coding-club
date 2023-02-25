import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Box } from "@mui/material";
import { DateRange, WatchLater } from "@mui/icons-material";
const JobDeadLineCard = (props) => {

  const data = props.jobInfo
  console.log('From Deadline')
  console.log(data)
  // const selectedObject = filterById(Jobdata, id);

  return (
    <JobDescriptionContainer>
      <Typography variant="h5" component="h2" fontWeight={700} marginBottom='0.75rem'>
        What are the important dates & deadlines?
      </Typography>
      <Box display={'flex'} flexDirection='column' gap={2}>

        <Box display={'flex'} alignItems='center' gap={1}>
          <DateRange fontSize="large" />
          <Typography variant="h6">Application Deadline: {data.applicationEndDate}</Typography>
        </Box>
        {data.type === 'Internship' && <Box display={'flex'} alignItems='center' gap={1}>
          <WatchLater fontSize="large" />
          <Typography variant="h6">Duration: {data.duration} Month(s)</Typography>
        </Box>}
      </Box>
    </JobDescriptionContainer>
  );
};

export default JobDeadLineCard;

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
