import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import beginLogo from "../Assets/1.png";
import handsOnLogo from "../Assets/11.png";
import keepItSimplelogo from "../Assets/33.png";
import domainLogo from "../Assets/44.png";
import { Container } from "@mui/system";

const FeaturesCard = ({ data }) => {
  return (
    <FeaturesCardWrapper id="about">
      <Container>
        <Grid container maxWidth={"lg"} justifyContent={"center"} spacing={5}>
          <Grid item xs={12} md={3}>
            <div className="card">
              <div className="imgdiv">
              <img
                  src={
                   
                       data.features.firstimg? data.features.firstimg:beginLogo
                    
                  } 
                  alt=""
                />
              </div>
              <div className="contentdetails">
                <h4>
                  {data.features.firstheading
                    ? data.features.firstheading
                    : "Beginner Friendly"}
                </h4>
                <p>
                  {data.features.first
                    ? data.features.first
                    : "Our programs are tailor made and are beginner friendly. We want all to prosper and none to be left behind."}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="card">
              <div className="imgdiv">
                <img
                  src={
                   
                       data.features.secondimg? data.features.secondimg:handsOnLogo
                    
                  } 
                  alt=""
                />
              </div>
              <div className="contentdetails">
                <h4>
                  {data.features.second
                    ? data.features.secondheading
                    : "Hands On"}
                </h4>
                <p>
                  {data.features.second
                    ? data.features.second
                    : "Create from your learning. We focus on hands on. We believe practical knowledge is as important as conceptual knowledge."}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="card">
              <div className="imgdiv">
              <img
                  src={
                       data.features.thirdimg? data.features.thirdimg:keepItSimplelogo
                  } 
                  alt=""
                />
              </div>
              <div className="contentdetails">
                <h4>
                  {data.features.thirdheading
                    ? data.features.thirdheading
                    : "Keep it Simple"}
                </h4>
                <p>
                  {data.features.third
                    ? data.features.third
                    : "We believe in simplicity. Learning can be very simple if you have the right approach. Keep simple, learn more."}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="card">
              <div className="imgdiv">
              <img
                  src={
                   
                       data.features.forthimg? data.features.forthimg:domainLogo
                    
                  } 
                  alt=""
                />
              </div>
              <div className="contentdetails">
                <h4>Domain Specialists</h4>
                <p>
                  We got experts in each domain to make your learning smooth and
                  get you equipped with the right skills, the right way.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </FeaturesCardWrapper>
  );
};

const FeaturesCardWrapper = styled.div`
  margin: 5rem 0;
  .card {
    width: 100%;
    height: 25rem;
    display: flex;
    padding: 2rem;
    background-color: #140230;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .imgdiv {
      width: 7rem;
      img {
        width: 100%;
      }
    }
    .contentdetails {
      color: #ffffff;
      text-align: center;
      h4 {
        font-size: 1.8rem;
        line-height: -1rem;
      }
      p {
        opacity: 70%;
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }

    @media screen and (max-width: 706px) {
      margin: 1rem 0;
      .card {
        height: 150rem;
      }
    }
  }
`;

export default FeaturesCard;
