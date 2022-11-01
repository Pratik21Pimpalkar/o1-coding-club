import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import aptitudeseries from "../Assets/events/aptitudeseries.png";
import coderun from "../Assets/events/coderun.png";
import coresubjects from "../Assets/events/coresubjects.png";
import pythonbootcamp from "../Assets/events/pythonbootcamp.png";
import sdebootcamp from "../Assets/events/sdebootcamp.png";
import super50 from "../Assets/events/super50.png";

import { Outlet, Link } from "react-router-dom";
const FeaturePosition = {
  color: "white",
  //   marginBottom: "4rem",
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
            '@media (max-width:480px)': {
              fontSize: '2.3rem',
            }
          }}
        >
          Our Events
        </Typography>
        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <img src={aptitudeseries} alt=""  style={{width:"100%",padding:" 0 2rem"}}/>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Afraid of <span>aptitude</span>  tests?</h3>
                <p>
                  Our test series offers company specific tests designed by
                  experts, consisting of all previous years questions with the
                  latest test format.
                </p>
              </div>
              <Link className="explore-btn" to="/aptitudeseries">Explore More</Link>
            </Box>
          </Grid>
        </Grid>

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
                <h3 className="heading-desktop">Not confident about <span>coding</span>?</h3>
                <p>
                  Start Learning Python with us. Get trained by Industry Experts
                  with our highly rated training program. This bootcamp is for
                  beginners in coding wanting to grab high paying IT jobs
                </p>
              </div>
              <Link className="explore-btn left" to="/pythonbootcamp">Explore More</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <img src={pythonbootcamp} alt="" width={"100%"} height={340} />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <img src={super50} alt="" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Stuck on <span>DSA</span>? </h3>
                <p>
                  DSA & Problem Solving is the most important skill when it
                  comes to placements in the IT industry. Master it in just 45
                  days and get even closer to your Super Dream Placement.
                </p>
              </div>
              <Link className="explore-btn" to="/super50">Explore More</Link>
            </Box>
          </Grid>
        </Grid>

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
                <h3 className="heading-desktop"><span>Placements</span> starting soon?</h3>
                <p>
                  Strengthen all your core subjects within just 15 days with the
                  help of our Superdream placed experts & be ready to ace
                  through placements
                </p>
              </div>
              <Link className="explore-btn left" to="/coresubjects">Explore More</Link>  
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <img src={coresubjects} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Container>
    </Events>
  );
};
const Events = styled.div`
  height: max-content;
  position: relative;
  .explore-btn{
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
  color:black;

  }

    }

 
     .left{
      margin-right:2rem;
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
  .btn{
    
  }
  .heading-desktop{
   
      color:#0088ff;
    -webkit-text-fill-color:initial !important ;
    background:initial;
    span{
      color:#be69fa;
    }
    

  }
`;

export default OurEvents;
