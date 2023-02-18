import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Jobdata } from "../components/JobData";
const JobDeadLineCard = ({id}) => {
  const filterById = (jsonObject, id) => {return jsonObject.filter((jsonObject)=>{return (jsonObject['id'] === id);})[0];}
  const selectedObject = filterById(Jobdata, id);
  
  return (
    <JobDescriptionContainer>
      <Typography variant="h5" component="h2">
        What are the important dates & deadlines?
      </Typography>
      <Typography variant="body1" className="jobResponsibilities">
        Application Deadline
      </Typography>
      <Typography variant="body1" className="jobResponsibilities">
        {selectedObject.deadline}
      </Typography>
    </JobDescriptionContainer>
  );
};

export default JobDeadLineCard;

const JobDescriptionContainer = styled.div`
  background-color: #140230;
  color: #fff;
  padding: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;

  .jobResponsibilities {
    margin-top: 10px;
  }
`;
