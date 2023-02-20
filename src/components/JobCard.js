import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";

const JobCard = ({ name, companyName, impressions, daysleft, onclick, border}) => {
  return (
    <JobContainer>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          marginRight: "5px",
          backgroundColor: "#1B2430",
          color: "#e5e5e5",
          flexDirection: "column",
          border: border,
        }}
      >
        <CardActionArea onClick={onclick}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "30%", height: "fit-content" }}
              image="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
              alt="Company Logo"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography component="p" variant="subtitle1">
                  {name}
                </Typography>
                <Typography
                  variant="subtitle5"
                  component="p"
                  color="rgba(255,255,255,0.5)"
                >
                  {companyName}
                </Typography>
              </CardContent>
            </Box>
          </div>
          <CardContent style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="subtitle2"
              component="div"
              style={{ marginRight: "50px" }}
            >
              {impressions}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              style={{ marginLeft: "50px" }}
            >
              {daysleft}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </JobContainer>
  );
};

export default JobCard;

const JobContainer = styled.div`

  .jobCard:focus{
    border: 1px solid #fff;
  }

`;
