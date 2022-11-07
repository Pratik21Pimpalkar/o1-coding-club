import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import beginLogo from "../images/benefits.jpg";
import benefits from '../../Assets/benefits.png'
import { Container } from "@mui/system";
const Eligibility = ({ data }) => {
  return (
    <FeaturesCardWrapper>
      <div>
        <Container>
          <Typography variant="h2" sx={{
            color: 'white', textAlign: "center", '@media screen and (max-width:480px)':{
              fontSize:"2.2rem"
            }
        }}>Eligibility</Typography>

          <Grid container maxWidth={"lg"} justifyContent={"center"} spacing={5}>
            <Grid item xs={12} md={6}>
              <div className="card">
                <div className="imgdiv">
                    {/* <p></p> */}
                  {/* <img src={benefits} alt="" /> */}
                </div>
                <div className="contentdetails">
                  {data.Eligibility.map((item, key) => {
                    return (
                      <ul key={key}>

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

export default Eligibility;

const FeaturesCardWrapper = styled.div`
  margin: 5rem 0;
  .heading {
    text-align: center;
    font-size: 5rem;
    color: white;
  }
  .card {
    margin-top: 2rem;
    width: 100%;
    min-height: 15rem;
    display: flex;
    padding: 3.3rem;
    background-color: #140230;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .imgdiv {
      width: 13rem;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    .contentdetails {
      color: #ffffff;
      text-align: left;

      margin: 1rem 0rem;
      opacity: 70%;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    @media screen and (max-width: 576px) {
     
      .contentdetails {
        font-size: 1.2rem;
      }
    }
  }
`;
