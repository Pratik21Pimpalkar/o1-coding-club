import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../images/login.svg";
import rupee from "../../../Assets/rupee.png";
import styled from "styled-components";
import { textAlign } from "@mui/system";
const FeaturePosition = {
  color: "white",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "0.5rem 2rem",
  fontSize: "19px",
  marginBottom: "1rem",
};

const FeatureSection = ({ data }) => {
  const instructerData = Array.from(data.instructer);
  return (
    <>
      <AboutProgram>
        <Container maxWidth="lg" style={FeaturePosition}>
          <div className="section-title ">
            <h2 className="main-heading">
              About the Program
            </h2>
          </div>

          {data.instructer[0].name ? (
            <>
              <h3 className="heading-desktop"> About Instructor</h3>

              {instructerData.map((item, key) => {
                return (
                  <>
                    <Grid
                      key={key}
                      container
                      alignItems={"center"}
                      justifyContent={"center"}
                      rowSpacing={1}
                      columnSpacing={5}
                    >
                      {/* <li className="items">{item}</li> */}
                      <Grid item md={3}>
                        <div className="image">
                        <img
                          src={item.instructerimg ? item.instructerimg : img}
                          alt=""
                          className="instructerimg"
                        /></div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={5}>
                        <Box sx={{ height: "max-content" }}>
                          <div style={FeatureParagraph}>
                            <h3 className="heading-desktop2">{item.name}</h3>
                            <h4 >{item.desig}</h4>
                            <p>{item.about}</p>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </>
          ) : (
            <div></div>
          )}
          {data.showpricing ? (
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              wrap={"wrap-reverse"}
            >
              <Grid item xs={12} sm={12} md={5} order={{ md: 2, lg: 1 }}>
                <Box sx={{ height: "max-content" }}>
                  <div style={FeatureParagraph}>
                    <h3 className="price-desktop">Pricing</h3>
                    <h3 className="price-desktop2">{data.pricing}</h3>
                  </div>
                </Box>
              </Grid>
              <Grid item md={5} order={{ md: 1, lg: 2 }}>
                <img src={rupee}  alt="" className="rupeeimg" />
              </Grid>
            </Grid>
          ) : (
            <div></div>
          )}
        </Container>
      </AboutProgram>
    </>
  );
};

export default FeatureSection;

const AboutProgram = styled.div`
  .section-title {
    text-align: center;
  }
  .main-heading{
    font-size :3.2rem;
    margin-bottom: 2rem;
  }

  .heading-desktop {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .heading-desktop2 {
    -webkit-text-fill-color: initial;
    color: #9874ff;
    font-size: 1.7rem;
  }

  .price-desktop {
    font-size: 2.8rem;
    text-align: center;
  }
  .price-desktop2 {
    font-size: 2rem;
    text-align: center;
  }
  .instructerimg {
    width: 16rem;
    /* margin-left: 5rem; */
    border-radius: 1rem;
    border: 4px double #9874ff;
    margin: 0 auto;
      height: 15rem;
    
    object-fit: cover;
    @media screen and (max-width: 400px) {
      width: 12rem;
    }
  }
  .rupeeimg {
    width: 25rem;
  }

    @media screen and (max-width: 576px) {
    .main-heading{
    
    font-size: 2.2rem;
  }
  .heading-desktop{
    font-size: 2rem;
  }
  .heading-desktop2{
    text-align:center;
  }
  } 

`;
