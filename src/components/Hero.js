import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import bg from "../Assets/3.svg";
import styled from "styled-components";
import tab from "../Assets/tab.png";
import bluebubble from "../Assets/Bubble-blue.svg";
import purplebubble from "../Assets/Bubble-purple.svg";
import lappyimg from "../Assets/lappy_img.png";

const Hero = () => {
  return (
    <HeroWrapper
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* <img src={bg} alt="" /> */}
      <Container maxWidth={"lg"}>
        <Grid container className="main-grid">
          <Grid item xs={12} md={8} lg={5} className="inside-grid">
            <Typography className="headingtext" variant="h1">
              O(1) <br /> Coding
              <br /> Club
            </Typography>
            <Typography variant="h5" className="short-line">
              Closer to your AMBITIONS,a step at a time.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <div className="animation css-1o807li">
              <img src={tab} alt="" className="tabimg" />
              <div className="css-ucfc1 e1foku9a4">
                <div className="css-18q3wgh">
                  <img src={bluebubble} />
                </div>

                <div className="css-19fx3dz">
                  <img src={purplebubble} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  .headingtext {
    font-size: 5vw;
  }
  .tabimg {
    z-index: 52;
    height: 40rem;
  }
  .css-130rcti {
    font-size: 3.4rem;
    line-height: 3.9rem;
    /* color: #121619; */
    margin: 0 0 16px;
    font-weight: 800;
    font-size: 3.4rem;
    line-height: 3.9rem;
  }

  @media screen and (min-width: 576px) {
    .css-130rcti {
      font-size: 6rem;
      line-height: 6.4rem;
    }
    .css-130rcti br {
      display: initial;
    }
  }
  @media screen and (max-width: 576px) {
    .headingtext {
      text-align: center;
      font-size: 15vw;
    }
    .inside-grid {
      top: 3rem;
    }
  }

  .main-grid {
    position: relative;
  }
  .inside-grid {
    position: absolute;
    top: 13rem;

    font-weight: 500;
  }
  .short-line {
    margin-top: 2rem;
  }

  .css-1o807li {
    /* width: 1320px; */

    /* padding: 0 36px; */
    /* margin: 0 auto; */
    top: 10rem;
    position: relative;
    /* height: calc(100% - 202px); */
    /* margin-top: 202px; */
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    /* overflow-y:visible; */
  }

  .css-ucfc1 {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 8vh;
    left: 25vw;
    pointer-events: none;
  }
  .css-18q3wgh {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: translateX(-40%) translateY(-40%);
    -moz-transform: translateX(-40%) translateY(-40%);
    -ms-transform: translateX(-40%) translateY(-40%);
    transform: translateX(-40%) translateY(-40%);
  }

  .css-18q3wgh img {
    -webkit-animation: animation-vdr77 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      infinite;
    animation: animation-vdr77 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  }

  .css-19fx3dz {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translateX(40%) translateY(-40%);
    -moz-transform: translateX(40%) translateY(-40%);
    -ms-transform: translateX(40%) translateY(-40%);
    transform: translateX(40%) translateY(-40%);
  }

  .css-19fx3dz img {
    -webkit-animation: animation-vdr77 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      infinite;
    animation: animation-vdr77 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  @keyframes animation-vdr77 {
    0% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
    50% {
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
    100% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
export default Hero;
