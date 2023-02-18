import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import JobDescription from "./JobDescription";
import { Jobdata } from "../components/JobData";

const JobInformation = ({id}) => {

  const filterById = (jsonObject, id) => {return jsonObject.filter((jsonObject)=>{return (jsonObject['id'] === id);})[0];}

  const selectedObject = filterById(Jobdata, id);

  return (
    <div style={{ width: "100%" }}>
      <Card
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-between",
          height: "300px",
          backgroundColor: "#140230",
          color: "#ffffff",
          marginBottom: "30px",
        }}
      >
        <div style={{ width : "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5rem"  }}>
          <Box sx={{ display: "flex", marginLeft: "20px", marginTop: "30px" }}>
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
              <button className="btn-giveTest btn fullwidthbtn">Apply</button>
            </div>
          </Box>
        </div>
        <div style={{ display: "flex" }}>
          <Box style={{ display: "flex", marginLeft: "20px" }}>
            <div>
              <button className="btn-giveTest btn fullwidthbtn">
                Bookmark
              </button>
            </div>
            <div>
              <button className="btn-giveTest btn fullwidthbtn">
                Calender
              </button>
            </div>
          </Box>
        </div>
        </div>
      </Card>

      <Card>
        <JobDescription id={id} />
      </Card>
    </div>
  );
};

export default JobInformation;
