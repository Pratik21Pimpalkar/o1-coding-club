import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../images/login.svg";
import rupee from '../../../Assets/rupee.gif'
import styled from "styled-components";
const FeaturePosition = {
  color: "white",
  marginBottom: "4rem",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "5rem 2rem",
  fontSize: "19px",

};
const gridStyle = {
  height: "8vh",
  margin: " 20rem 0",
};
// const dummyData = Data[0];
const gridOrder = { order: "-1" };

const FeatureSection = ({data}) => {
  return (
    <>
    <AboutProgram>
     <Container maxWidth="lg" style={FeaturePosition}>
        <Typography
          variant="h2"
          gutterBottom={true}
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="section-title">
            <h2 style={{ fontSize: "2.5rem" }}>About the Program</h2>
            <span className="section-separator"></span>
          </div>
        </Typography>
        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>

          <Grid item xs={12} sm={12} md={5}>

       <img src={data.instructer.instructerimg?data.instructer.instructerimg:img} alt="" className="instructerimg"/>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <div  style={FeatureParagraph}>
                <h3 className="heading-desktop" > About Instructer</h3> 
                <h3 className="heading-desktop2" >{data.instructer.name}</h3> 
                {data.instructer.about}
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
                <h3  className="price-desktop" >Pricing</h3>
                <h3  className="price-desktop2" >2000</h3>
              
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
          <img src={rupee}  alt="" className="instructerimg" />
          </Grid>
        </Grid>

      </Container>

      </AboutProgram>
      </>
  );
};

export default FeatureSection;


const AboutProgram = styled.div`
.heading-desktop{

}

.heading-desktop2{
  font-size: 1.7rem;
}

.price-desktop{
  font-size: 4rem;
  text-decoration: line-through;
  text-align: center;
}
.price-desktop2{
  font-size: 3rem;
  text-align: center;

}
.instructerimg{
  height: 40vh;
  /* margin-left: 5rem; */
 margin: 0 auto;
 border-radius: 10px;
}
`