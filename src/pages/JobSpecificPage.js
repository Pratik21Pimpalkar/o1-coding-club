import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Jobdata } from "../components/JobData";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import JobDescription from "../components/JobDescription";
import Register from "../components/JobStudentRegister";
import styled from "styled-components";
import NavbarMain from "../components/NavbarMain";
import JobDeadLineCard from "../components/JobDeadLineCard";
import JobAdditionalInfomationCard from "../components/JobAdditionalInfomationCard";

const JobSpecificPage = () => {
  const { id } = useParams();

  const filterById = (jsonObject, id) => {
    return jsonObject.filter((jsonObject) => {
      return jsonObject["id"] === Number(id);
    })[0];
  };

  const selectedObject = filterById(Jobdata, id);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
        <Card
          sx={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-between",
            height: "300px",
            backgroundColor: "#1B2430",
            color: "#ffffff",
            marginBottom: "30px",
            width: "70%",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5rem",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{ display: "flex", marginLeft: "20px", marginTop: "30px" }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
                  alt="Company Logo"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />

                <Box sx={{ display: "flex" }}>
                  <CardContent sx={{ paddingTop: "0", marginTop: "-6px" }}>
                    <Typography component="div" variant="h5">
                      {selectedObject.jobTitle}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="rgba(255,255,255,0.5)"
                      component="p"
                    >
                      {selectedObject.company}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="rgba(255,255,255,0.5)"
                      component="p"
                    >
                      {selectedObject.time}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="rgba(255,255,255,0.5)"
                      component="p"
                    >
                      {selectedObject.applied} applications
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
              <Box style={{ display: "flex", marginLeft: "20px" }}>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="btn-giveTest btn fullwidthbtn styleInJobApplyButton"
                  >
                    Apply
                  </button>
                  <Register open={open} handleClose={handleClose} />
                </div>
              </Box>
            </div>
            <div style={{ display: "flex" }}>
              <Box style={{ display: "flex", marginLeft: "20px" }}>
                <div>
                  <button className="btn-giveTest btn fullwidthbtn styleInJobApplyButton">
                    Bookmark
                  </button>
                </div>
                <div>
                  <button className="btn-giveTest btn fullwidthbtn styleInJobApplyButton">
                    Calender
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </Card>

        <Card className="jobDescriptionPageSpecefic">
          <JobDescription id={id} />
          <JobDeadLineCard id={id} />
          <JobAdditionalInfomationCard id={id} />
        </Card>
      </JobSpecificPageContainer>
    </div>
  );
};

export default JobSpecificPage;

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
