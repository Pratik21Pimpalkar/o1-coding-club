import React from "react";
import styled from "styled-components";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function IncomeAgreement({ pricedata }) {
  return (
    <Wrapper>
      <Grid container justifyContent="center" spacing={9}>
        <Grid item sm={6}>
          <Card
            className="root"
            style={{
              backgroundColor: "#140230",
              color: "white",
              borderRadius: "1rem",
            }}
          >
            <CardContent>
              <Typography className="title">PLAN A</Typography>
              <hr />
              <Typography
                style={{
                  marginTop: "25px",
                  fontSize: "45px",
                  fontWeight: "550",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="h5"
                component="h2"
              >
                ₹ {pricedata.priceplanA}
              </Typography>

              <Typography className="pos">Upfront Registration Fees</Typography>
              <hr />
              <Typography
                style={{
                  marginTop: "25px",
                  fontSize: "25px",
                  fontWeight: "550",
                }}
                variant="h5"
                component="h2"
              >
                Income Sharing Percentage
              </Typography>

              <table className="table" border="1">
                <tbody>
                  <tr className="tr">
                    <th className="th1">If You Get</th>
                    <th className="th">You Pay</th>
                  </tr>
                  <tr className="tr">
                    <td className="td1">Internship Offer</td>
                    <td className="td">20% of monthly salary for 1 month</td>
                  </tr>
                  <tr className="tr">
                    <td className="td1">Full-Time Offer</td>
                    <td className="td">20% of monthly salary for 1 month</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card
            className="root"
            style={{
              backgroundColor: "#140230",
              color: "white",
              borderRadius: "1rem",
            }}
          >
            <CardContent>
              <Typography className="title">PLAN B</Typography>
              <hr />
              <Typography
                style={{
                  marginTop: "25px",
                  fontSize: "45px",
                  fontWeight: "550",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="h5"
                component="h2"
              >
                ₹ {pricedata.priceplanB}
              </Typography>
              <Typography className="pos">Upfront Registration Fees</Typography>
              <hr />
              <Typography
                style={{
                  marginTop: "85px",
                  fontSize: "27px",
                  fontWeight: "550",
                }}
                variant="h5"
                component="h2"
              >
                No Income Sharing Required
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  -webkit-text-fill-color: initial;
  text-align: center;
  margin: 1rem;
  margin-top: 3rem;

  .root {
    /* min-width: 250; */
    margin-bottom: 50px;
    /* background-color: #1e1c1c; */
    min-height: 530px;
    &:hover {
      margin-top: -10px;
      border: 2px solid transparent;
      border-image-slice: 1;
      animation: myEffect 3000ms linear infinite;
    }
  }
  @keyframes myEffect {
    0% {
      border-image: linear-gradient(
        to bottom right,
        #b827fc 0%,
        #2c90fc 25%,
        #b8fd33 50%,
        #fec837 75%,
        #fd1892 100%
      );
      border-image-slice: 1;
    }
    50% {
      border-image: linear-gradient(
        45deg,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00
      );
      border-image-slice: 1;
    }
    100% {
      border-image: linear-gradient(
        to bottom right,
        #b827fc 0%,
        #2c90fc 25%,
        #b8fd33 50%,
        #fec837 75%,
        #fd1892 100%
      );
      border-image-slice: 1;
    }
  }
  .title {
    font-size: 40px;
    font-weight: 600;
    color: #8831ff;
  }
  .pos {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 15px;
  }
  .table {
    border: 2px solid #9874ff;
    width: 85%;
    margin: auto;
    margin-top: 25px;
  }
  tr {
    border-bottom: 1px solid #9874ff;
  }
  .th {
    border-bottom: 1px solid #9874ff;
    border-left: 2px solid #9874ff;
    font-size: 20px;
    padding: 10px;
  }
  .th1 {
    border-bottom: 1px solid #9874ff;
    font-size: 20px;
    padding: 10px;
  }
  .td {
    text-align: center;
    border-left: 2px solid #9874ff;
    font-size: 20px;
    padding: 10px;
  }
  .td1 {
    text-align: center;
    font-size: 20px;
    padding: 10px;
  }
`;
