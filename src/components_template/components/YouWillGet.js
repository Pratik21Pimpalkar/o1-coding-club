import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import beginLogo from "../images/benefits.jpg";
import benefits from '../../Assets/benefits.png'
import { Container } from "@mui/system";
const YouWillGet = ({ data }) => {
  return (
    <FeaturesCardWrapper>
    
        <Container>
          {/* <Typography variant="h2" sx={{
            color: 'white', textAlign: "center", '@media screen and (max-width:480px)':{
              fontSize:"2.2rem"
            }
        }}>YOU GET !</Typography> */}

          <Grid container maxWidth={"lg"} justifyContent={"center"} spacing={5}>
            <Grid item xs={12} md={6}>
              <div className="card">
                <div className="imgdiv">
                  <img src={benefits} alt="" />
                </div>
                <div className="contentdetails">
                  {data.youwillget.map((item, key) => {
                    return (
                      <ul key={key}>
                        <li className="items">{item}</li>{" "}
                      </ul>
                    );
                  })}
                </div>
                <div id="timeline"></div>
              </div>
            </Grid>
          </Grid>
        </Container>
   
    </FeaturesCardWrapper>
  );
};

export default YouWillGet;

const FeaturesCardWrapper = styled.div`
 
  .heading {
    text-align: center;
    font-size: 5rem;
    color: white;
  }
  .card {
    /* margin-top: 2rem; */
    width: 100%;
    min-height: 25rem;
    display: flex;
    padding: 2rem;
    padding-left: 3rem;
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
