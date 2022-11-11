import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../images/login.svg";
import rupee from "../../../Assets/rupee.png";
import styled from "styled-components";
import { textAlign } from "@mui/system";
const FeaturePosition = {
  color: "white",
  marginBottom: "4rem",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "1rem 2rem",
  fontSize: "19px",
  marginBottom: "1rem",
};
const gridStyle = {
  height: "8vh",
  margin: " 20rem 0",
};
// const dummyData = Data[0];
const gridOrder = { order: "-1" };

const FeatureSection = ({ data }) => {
  const instructerData = Array.from(data.instructer);
  return (
    <>
      <AboutProgram>
        <Container maxWidth="lg" style={FeaturePosition}>
          <div className="section-title ">
            <h2 style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>
              About the Program
            </h2>
          </div>

          {data.instructer[0].name ? (
            <>
              <h3 className="heading-desktop"> About Instructer</h3>

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
                        <img
                          src={item.instructerimg ? item.instructerimg : img}
                          alt=""
                          className="instructerimg"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={5}>
                        <Box sx={{ height: "max-content" }}>
                          <div style={FeatureParagraph}>
                            <h3 className="heading-desktop2">{item.name}</h3>
                            {item.about}
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
              <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
                <Box sx={{ height: "max-content" }}>
                  <div style={FeatureParagraph}>
                    <h3 className="price-desktop">Pricing</h3>

                    <h3 className="price-desktop2">{data.pricing}</h3>
                  </div>
                </Box>
              </Grid>
              <Grid item md={5} order={{ md: 1, lg: 2 }}>
                <img src={rupee} alt="" className="rupeeimg" />
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
    font-size: 4rem;
    text-decoration: line-through;
    text-align: center;
  }
  .price-desktop2 {
    font-size: 3rem;
    text-align: center;
  }
  .instructerimg {
    width: 16rem;
    /* margin-left: 5rem; */
    border-radius: 1rem;
    border: 4px double #9874ff;
    margin: 0 auto;
    @media screen and (max-width: 400px) {
      width: 12rem;
    }
  }
  .rupeeimg {
    width: 20rem;
  }
`;
