import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
// import aptitudeseries from "../Assets/events/aptitudeseries.png";
// import coderun from "../Assets/events/coderun.png";
// import coresubjects from "../Assets/events/coresubjects.png";
// import pythonbootcamp from "../Assets/events/pythonbootcamp.png";
// import super50 from "../Assets/events/super50.png";
import sdebootcamp from "../Assets/events/sdebootcamp.png";

import { Outlet, Link } from "react-router-dom";
const FeaturePosition = {
  color: "white",
  fontFamily: "muli",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "3rem 2rem",
  fontSize: "1.18rem",
};

const OurEvents = () => {
  return (
    <Events id="events">
      <Container maxWidth="lg" style={FeaturePosition}>
        <Typography
          variant="h1"
          gutterBottom={true}
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: "3.0rem",
            fontWeight: "bold",
            marginBottom: "3rem",
            marginTop: "5rem",
            "@media (max-width:480px)": {
              fontSize: "2.3rem",
            },
          }}
        >
          Ongoing Events
        </Typography>

        <Grid
          container
          alignItems={"center"}
          rowSpacing={1}
          columnSpacing={5}
          wrap={"wrap-reverse"}
        >
          <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                  <span>1000x</span>   Placement Program
                </h3>
                <p>
                Exclusive placement program to make you a warrior in placement battlefield. 
                </p>
              </div>
              <Link className="explore-btn left" to="/1000x">
                Explore More
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <img src={sdebootcamp} alt="" width={"80%"} />
          </Grid>
          </Grid>
         
      </Container>
    </Events>
  );
};
const Events = styled.div`
  height: max-content;
  position: relative;
  .explore-btn {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #91d2ff;
    border: 2px solid #bb4fff;
    padding: 11px 15px;
    border-radius: 9px;
    opacity: 0.8;
    margin-left: 2rem;
    font-weight: 800;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  .left {
    margin-right: 2rem;
  }
  h3 {
    font-size: 2.25rem;
    margin-bottom: 3rem;
  }

  div p {
    margin-top: 0.5rem;
    /* font-size: 1.2rem; */
    font-size: 1.55rem;
  }
  @media screen and (max-width: 576px) {
    h3 {
      font-size: 2rem;
    }
    div p {
      margin-top: 0.2rem;
      font-size: 1.4rem;
    }
  }
  .btn {
  }
  .heading-desktop {
    color: #0088ff;
    -webkit-text-fill-color: initial !important ;
    background: initial;
    span {
      color: #be69fa;
    }
  }
`;

export default OurEvents;