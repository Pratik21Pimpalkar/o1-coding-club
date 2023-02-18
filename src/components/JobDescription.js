import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItem";
import styled from "styled-components";
import { Jobdata } from "../components/JobData";
const JobDescription = ({ id }) => {
  const filterById = (jsonObject, id) => {
    return jsonObject.filter((jsonObject) => {
      return jsonObject["id"] === id;
    })[0];
  };

  const text = {
    color: "#fff",
  };

  const selectedObject = filterById(Jobdata, id);

  return (
    <JobDescriptionContainer>
      <Typography variant="h5" component="h2">
        Job Description
      </Typography>
      <Typography variant="body1" className="jobResponsibilities">
        Responsibilities
      </Typography>
      <List>
        {selectedObject.jobDescription.responsibilities.map((res) => {
          return (
            <ListItem>
              <Typography variant="body2" style={{ color: '#FFFFFF', padding: "10px" }}>{res}</Typography>
            </ListItem>
          );
        })}
      </List>

      <Typography variant="body1" className={""}>
        Requirements
      </Typography>
      <List>
        {selectedObject.jobDescription.requirements.map((res) => {
          return (
            <ListItem>
              <Typography variant="body2" style={{ color: '#FFFFFF', padding: "10px" }}>{res}</Typography>
            </ListItem>
          );
        })}
</List>
    </JobDescriptionContainer>
  );
};

export default JobDescription;

const JobDescriptionContainer = styled.div`
  background-color: #140230;
  color: #fff;
  padding: 1.5rem;

  .jobResponsibilities {
    margin-top: 10px;
  }
`;
