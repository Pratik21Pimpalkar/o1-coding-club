import React from "react";
import { Container } from "@mui/system";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import styled from "styled-components";
import FeaturesCard from "../components/FeaturesCard";
import PagesData from "./PagesData";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
import Banner from "../components/Banner";
import AboutInstructor from "../components/AboutInstructor";
import Pricing from "../components/Pricing";
import MainContent from "../components_template/components/TextContent/MainContent";
import ReferralSlider from "../components/ReferralSlider";
import YouWillGet from "../components_template/components/YouWillGet";
import ApplyNowBtn from "../components/ApplyNowBtn";
import TimelineForSuper40 from "../components/TimelineForSuper40";
import Offers from "../components/Offers";
import AllOffers from "../components/AllOffers";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import rupee from "../Assets/rupee.png";
import FAQ from "../components/FAQ";
import Super50Curriculum from "../components/Super50Curriculum";

const Super50 = () => {
  const programdata = PagesData.Super50;
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Navbar />
        <MainContent name={programdata} />
        <Stats data={programdata} />
        <ReferralSlider />
        <YoutubeVideo />
        <FeaturesCard data={programdata} />
        <AboutInstructor data={programdata} />
        {/* <Super50Curriculum /> */}

        {/* <Banner /> */}
        {/* <Offers /> */}

        {/* <AllOffers /> */}

        <Pricing data={programdata} />

        {/* <Wrap id="timeline">
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            wrap={"wrap-reverse"}
          >
            <Grid item xs={12} sm={12} md={12} order={{ md: 2, lg: 1 }}>
              <Box sx={{ height: "max-content" }}>
                <div style={FeatureParagraph}>
                  <h3 className="price-desktop">Pricing</h3>
                  <Wrapper>
                    <Grid container justifyContent="center" spacing={8}>
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
                            <Typography
                              className="title"
                              style={{ padding: "2%" }}
                            >
                              PLAN A
                            </Typography>
                            <hr />
                            <Typography
                              style={{
                                marginTop: "25px",
                                fontSize: "45px",
                                fontWeight: "550",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "2%",
                              }}
                              variant="h5"
                              component="h2"
                            >
                              ₹ 25,450
                            </Typography>

                            <Typography className="pos">
                              Upfront Registration Fees
                            </Typography>
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
                              No interview required
                            </Typography>
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
                            <Typography
                              className="title"
                              style={{ padding: "2%" }}
                            >
                              PLAN B (Scholarship)
                            </Typography>
                            <hr />
                            <Typography
                              style={{
                                marginTop: "25px",
                                fontSize: "45px",
                                fontWeight: "550",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "2%",
                              }}
                              variant="h5"
                              component="h2"
                            >
                              ₹ 5,450
                            </Typography>
                            <Typography className="pos">
                              Upfront Registration Fees
                            </Typography>
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
                              Students shortlisted through Interview Process
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Wrapper>
                </div>
              </Box>
            </Grid>
            <Grid item order={{ md: 1, lg: 2 }}>
              <img src={rupee} alt="" className="rupeeimg" />
            </Grid>
          </Grid>
        </Wrap> */}

        {/* <div style={{ textAlign: "center" }}>
          <p style={{ color: "#9874ff", fontWeight: "bold", fontSize: "20px" }}>
            Note : The program is free if we fail to land you minimum of 7LPA
            job. 100% refund, no questions asked.
          </p>
        </div> */}

        <ApplyNowBtn data={programdata} />

        {/* <Eligibility data={programdata} /> */}
        {programdata.showyouwillget ? (
          <YouWillGet data={programdata} />
        ) : (
          <div></div>
        )}

        {programdata.showtimeline ? (
          <TimelineForSuper40 data={programdata} />
        ) : (
          <div></div>
        )}

        {/* <TimeLineStyled>
          <h3 className="heading-desktop">How to Register for Plan A?</h3>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h2 style={{ marginLeft: 10 }}>Transfer the Fees</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Transfer ₹ 25,450 on the given QR code.<br></br>
                  </p>
                  <button className="btn-giveTest mobileres">
                    <a
                      href={require("../Assets/QR.pdf")}
                      rel="noreferrer"
                      download={"QR_Code"}
                    >
                      QR Code
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="container right">
              <div className="content">
                <h2 style={{ marginLeft: 10 }}>Fill Registration Form</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Fill the registration form with screenshot of payment proof.
                  </p>
                  <a
                    href={"https://forms.gle/TckUMuvqnXFvScM57"}
                    rel="noreferrer"
                    className="explore-btn "
                    target="_blank"
                  >
                    <button className="btn-giveTest mobileres">
                      Registration Form
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TimeLineStyled>

        <TimeLineStyled>
          <h3 className="heading-desktop">
            How to Apply for Scholarship (Plan B)?
          </h3>
          <div className="timeline">
            <div className="container right">
              <div className="content">
                <h2 style={{ marginLeft: 10 }}>Fill Scholarship Form</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>Fill the scholarship form with your details and resume.</p>
                  <a
                    href={"https://forms.gle/NYnahRXSXR7YxZNQ6"}
                    rel="noreferrer"
                    className="explore-btn "
                    target="_blank"
                  >
                    <button className="btn-giveTest mobileres">
                      Scholarship Form
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="container left">
              <div className="content">
                <h2 style={{ marginLeft: 10 }}>Interview</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Wait for an Interview call from us if your resume is
                    shortlisted.<br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TimeLineStyled> */}

        <CompanySlider />
        <FAQ />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

const Wrap = styled.div`
  .limited {
    margin-top: 1.1rem;
    font-size: 1.3rem;
    -webkit-text-fill-color: #cfaecf;
    text-align: center;
  }
  .section-title {
    text-align: center;
  }
  .DownloadISA {
    color: #ad85ff;
    -webkit-text-fill-color: initial;
    text-decoration: underline;
  }
  .main-heading {
    font-size: 3.2rem;
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
    font-color: white;
  }
  .price-desktop2 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .pricing {
    text-align: center;
    margin-top: 1.5rem;
    border: 4px double #c930ff;
    td {
      -webkit-text-fill-color: #3902cd;
      background: #e6ddff;
      border-radius: 0.1rem;
      border: white 1px solid;

      font-size: 1.35rem;
      padding: 0.5rem 0.32rem;
      margin: 0.5rem 1rem;
    }
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
    width: 23rem;
  }

  @media screen and (max-width: 576px) {
    .main-heading {
      font-size: 2.2rem;
    }
    .heading-desktop {
      font-size: 2rem;
    }
    .heading-desktop2 {
      text-align: center;
    }
  }
`;

const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "19px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
};

const Wrapper = styled.div`
  -webkit-text-fill-color: initial;
  text-align: center;
  margin: 1rem;
  margin-top: 3rem;

  .root {
    margin-bottom: 50px;
    min-height: 400px;
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

const TimeLineStyled = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  .heading-desktop {
    margin: 2rem 0;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    padding: 1rem;
    background-color: white;
    position: relative;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  .content p {
    font-size: 1rem;
    padding: 0.2rem 0.4rem;
  }
  .content h2 {
    padding: 0.2rem 0.7rem;
    font-size: 1.32rem;
  }
  .btn-giveTest {
    background: rgba(0, 0, 0, 0)
      linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat
      scroll 0% 0%;
    font-family: "Poppins";
    margin-top: 0.9rem;
    margin-right: 0.6rem;
    text-transform: uppercase;
    height: auto;
    color: white !important;
    transition: all ease 0.5s;
    text-decoration: none;
    white-space: normal;
    width: initial !important;
    text-align: center;
    /* line-height: 35px; */
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgb(103 0 255 / 40%) 0px 10px 60px 0px;
    padding: 4px 26px;
    padding: 4px 14px;
    border-radius: 300px;
    /* filter: brightness(100%); */
    visibility: visible;
    cursor: pointer;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    .mobileres {
      transform: scale(0.7);
    }

    /* Place the timelime to the left */

    .timeline::after {
      left: 31px;
    }

    .content p {
      font-size: 0.7rem;
      padding: 0.2rem 0.4rem;
    }
    .content h2 {
      padding: 0.2rem 0.7rem;
      font-size: 1rem;
    }
    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
`;


export default Super50;
