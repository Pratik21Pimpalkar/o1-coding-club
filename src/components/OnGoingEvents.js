import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import coresubjects from "../Assets/events/coresubjects.png";
import super40 from "../Assets/events/super40.png";
import sdebootcamp from "../Assets/events/sdebootcamp.png";
import core from "../Assets/events/programming.svg";
import { Link } from "react-router-dom";
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

        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              display={"flex"}
              justifyContent="center"
              marginBottom={{ xs: "-3rem", md: "0rem" }}
            >
              <img src={super40} alt="super40" width={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                  <span>Super 40</span> Program
                </h3>
                <p>
                  The most complete & our biggest program, with guaranteed dream
                  placements & much more.
                </p>
              </div>
              <Link className="explore-btn" to="/super40">
                Explore More
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* <Grid
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
                  <span>Place </span> Kit
                </h3>
                <p>
                  The Complete Placement Preparation Kit is a 4-6 month program
                  designed to provide you with all the guidance required for
                  placements right from DSA, Core Subjects & Aptitude to making
                  you interview ready.
                </p>
              </div>
              <Link className="explore-btn left" to="/placekit">
                Explore More
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <Box
              display={"flex"}
              justifyContent="center"
              marginTop={{ xs: "3rem", md: "0rem" }}
              marginBottom={{ xs: "-2rem", md: "0rem" }}
            >
              <img src={coresubjects} alt="" width={"90%"} />
            </Box>
          </Grid>
        </Grid> */}

        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              display={"flex"}
              justifyContent="center"
              marginTop={{ xs: "3rem", md: "0rem" }}
              marginBottom={{ xs: "-3rem", md: "0rem" }}
            >
              <img src={sdebootcamp} alt="sdebootcamp" width={"80%"} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                  <span>SDE </span> Bootcamp
                </h3>
                <p>
                  Perfect program to master coding abilities for dream
                  placements.Exclusive program curated for selected students
                  wanting to ace through placements.
                </p>
              </div>
              <Link className="explore-btn left" to="/sdebootcamp">
                Explore More
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* <Grid
          container
          alignItems={"center"}
          rowSpacing={1}
          columnSpacing={5}
          wrap={"wrap-reverse"}
        >
          <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                  <span>CS Fundamentals</span> For Placements
                </h3>
                <p>
                  The complete placement preparation program for core
                  subjects/CS fundamentals important for campus as well as
                  off-campus placements
                </p>
              </div>
              <Link className="explore-btn" to="/csfundamentals">
                Explore More
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <Box
              display={"flex"}
              justifyContent="center"
              marginTop={{ xs: "3rem", md: "0rem" }}
              marginBottom={{ xs: "-3rem", md: "0rem" }}
            >
              <img src={core} alt="core" width={"90%"} />
            </Box>
          </Grid>
        </Grid> */}
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
