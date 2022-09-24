import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import aptitudeseries from "../Assets/events/aptitudeseries.png";
import coderun from "../Assets/events/coderun.png";
import coresubjects from "../Assets/events/coresubjects.png";
import pythonbootcamp from "../Assets/events/pythonbootcamp.png";
import sdebootcamp from "../Assets/events/sdebootcamp.png";
import super30 from "../Assets/events/super30.png";
const FeaturePosition = {
  color: "white",
//   marginBottom: "4rem",
  fontFamily:"sans-serif"
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "5rem 2rem",
  fontSize: "1.18rem",
};
const OurEvents = () => {
  return (
    <Events>
      <Container maxWidth="lg" style={FeaturePosition}>
        <Typography
          variant="h2"
          gutterBottom={true}
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "2.5rem"
          }}
        >
          
            Our Events
            
         
        </Typography>
        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>

            <img src={aptitudeseries} alt="" height={340} />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                Afraid of aptitude tests?
                </h3>
                Our test series offers company specific tests designed by experts, consisting of all previous years questions with the latest test format.
              </div>
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
                <h3 className="heading-desktop">Not confident about coding?</h3>
                Start Learning Python with us. Get trained by Industry Experts with our highly rated training program. This bootcamp is for beginners in coding wanting to grab high paying IT jobs


              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
          <img src={coderun} alt="" width={"100%"} height={340} />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
          <img src={super30} alt="" width={"100%"}/>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Stuck on DSA?</h3>
                DSA & Problem Solving is the most important skill when it comes to placements in the IT industry. Master it in just 45 days and get even closer to your Super Dream Placement.
              </div>
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
          {/* <h3  className="heading-desktop" >Subject-wise Performance</h3> */}
          <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Placements starting soon?</h3>
                Strengthen all your core subjects within just 15 days with the help of our Superdream placed experts & be ready to ace through placements

              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
          <img src={sdebootcamp} alt="" width={"100%"}/>
          </Grid>
        </Grid>

      </Container>
    </Events>
  );
};
const Events = styled.div`
  height: max-content;
  position: relative;


`;


export default OurEvents;
