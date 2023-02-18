import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { padding } from "@mui/system";
import { Jobdata } from "../components/JobData";

const SmallCard = ({ title, info }) => {
  return (
    <Card
      sx={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-between",
        height: "100px",
        backgroundColor: "rgb(11, 0, 26)",
        color: "#fff",
        marginBottom: "35px",
        width: "40%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          marginLeft: "5px",
          padding: "10px",
        }}
      >
        <Typography variant="subtitle1" component="p">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {info}
        </Typography>
      </Box>
    </Card>
  );
};

const JobAdditionalInfomationCard = ({id}) => {
  const filterById = (jsonObject, id) => {return jsonObject.filter((jsonObject)=>{return (jsonObject['id'] === id);})[0];}
  const selectedObject = filterById(Jobdata, id);
  return (
    <JobDescriptionContainer>
      <Typography variant="h5" component="h2">
        Additional Information
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "35px"
        }}
      >
        <SmallCard title={"Job Location(s)"} info={selectedObject.location} />
        <SmallCard title={"Experience"} info={selectedObject.exprience} />
        <SmallCard title={"Salary/Stipend"} info={selectedObject.salary} />
        <SmallCard title={"Work Detail"} info={selectedObject.workDetails.workingdays} />
        <SmallCard title={"Job Type/Timing"} info={selectedObject.jobTiming} />
      </div>
    </JobDescriptionContainer>
  );
};

export default JobAdditionalInfomationCard;

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
