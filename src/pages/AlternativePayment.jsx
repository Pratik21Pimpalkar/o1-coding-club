import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Container } from "@mui/system";

const AlternativePaymentMethod = () => {
  return (
    <FeaturesCardWrapper>
      <Container>
        <Grid container maxWidth={"lg"} justifyContent={"center"} spacing={5}>
          <Grid item xs={12} md={6}>
            <div className="card">
              <h1 className="heading"> Alternative Payment Method</h1>
              <h3 className="heading2">
                Use Only If Above Method Is Not Working
              </h3>
              <div className="contentdetails">
                <h4>
                  Use the bank account transfer feature of any UPI app &
                  transfer ₹ 999 to following account :-
                </h4>
              <br></br>
                <p className="bankdetails">
                  Account no: 0354002100261752 <br></br>
                  Ifsc code: PUNB0035400<br></br>
                  Account holders name: Catalysing Dreams and beyond<br></br>
                  <br></br>
                  
                </p>{" "}
                <p>Once payment is done don't forget to fill the application form
                  given above.</p>
              </div>
              <div id="timeline"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </FeaturesCardWrapper>
  );
};

const FeaturesCardWrapper = styled.div`
  margin-top: 4rem;
  .heading2 {
    text-align: center;
    font-size: 1.2rem;
    text-decoration: underline;
    color: white;
  }
  .bankdetails{
    text-align: center;
  }
  .heading {
    text-align: center;
    font-size: 2.2rem;
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

    .contentdetails {
      color: #ffffff;
      text-align: left;

      margin: 1rem 0rem;
      opacity: 70%;
      font-size: 1.3rem;
      line-height: 2rem;
    }

    @media screen and (max-width: 576px) {
      .contentdetails {
        font-size: 1.2rem;
      }
    }
  }
`;

export default AlternativePaymentMethod;
