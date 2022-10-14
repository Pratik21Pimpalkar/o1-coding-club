import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import beginLogo from "../images/benefits.jpg";
import { Container } from "@mui/system";
const YouWillGet = ({ data }) => {
  return (
    <FeaturesCardWrapper>
      <div>
        <Container>
          <h1 className="heading">YOU GET !</h1>

          <Grid container maxWidth={"lg"} justifyContent={"center"} spacing={5}>
            <Grid item xs={12} md={6}>
              <div className="card">
                <div className="imgdiv">
                  <img src={beginLogo} alt="" />
                </div>
                <div className="contentdetails">
              
                    {data.youwillget.map((item, key) => {
                      return (
                        <ul key={key}>
                          {" "}
                          <li className="items">{item}</li>{" "}
                        </ul>
                      );
                    })}
          
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </FeaturesCardWrapper>
  );
};

export default YouWillGet;

const FeaturesCardWrapper = styled.div`
  margin: 5rem 0;
  .heading {
    text-align: center;
    font-size: 5rem;
    color: white;
  }
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
      text-align: left;
      
        margin:1rem 0rem;
          opacity: 70%;
          font-size: 1.5rem;
        line-height: 2rem;
      
    }
  }
`;
