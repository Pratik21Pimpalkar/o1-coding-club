import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import tab from "../Assets/tab3.png";
import bluebubble from "../Assets/Bubble-blue.svg";
import purplebubble from "../Assets/Bubble-purple.svg";
import codingLottie from "../Assets/coding.json";
import Lottie from "react-lottie";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <HeroWrapper
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* <img src={bg} alt="" /> */}
      <Container>
        <Grid container className="main-grid">
          <Grid item xs={12} md={8} lg={4} className="inside-grid">
            <div className="text-position">
              <Typography className="  css-130rcti" variant="h1">
                O(1) Coding Club
              </Typography>
              <Typography variant="body1" className="head2">
                Closer to your AMBITIONS, a step at a time.
              </Typography>
              <Box sx={{
                display: {
                  xs: "block", md: "none"
                },
                width: "100%  "
              }}>
                <Lottie options={defaultOptions} className="lottieimg" />
              </Box>
              <Typography variant="body1" className="head3">
                10,000 Students from 31 colleges have trusted us
              </Typography>

              <HashLink smooth to="\#events">
                <div>
                  <button className="btn-giveTest btn fullwidthbtn">
                    Explore Our Programs
                  </button>
                </div>
              </HashLink>
            </div>
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <div className="animationclass">
              <img src={tab} alt="" className="tabimg" />
              <div className="css-ucfc1">
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
    </HeroWrapper >
  );
};

const HeroWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (min-width: 992px) {
    .ejyuya510 {
      white-space: pre;
    }
  }
  .fullwidthbtn {
    width: auto;

    padding: 5px 15px;
    position: static;
  }

  .head2 {
    font-size: 1.3rem;
    /* white-space: pre; */
  }

  .head3 {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "muli";
    letter-spacing: 1px;
    /* white-space: pre; */
    margin-top: 2rem;
  }
  .explore-btn {
    text-decoration: none;
    color: white;
    padding: 15px;
    border-radius: 6px;
    font-size: 1.2rem;
    margin-top: 2rem;
    background-image: linear-gradient(270deg, #f96b24, #ff9100);
    transition: all 0.3s;

    &:hover {
      color: black;
    }
  }
  .headingtext {
    font-size: 5vw;
  }
  .tabimg {
    z-index: 2;
    height: 46rem;
  }


  @media screen and (min-width: 576px) {
    .css-130rcti {
      font-size: 6rem;
      line-height: 6.4rem;
    }

    .animationclass{

     
    }

    .text-position {
      /* position:absolute; */
      margin-top: 14rem;
      position: absolute;
      z-index: 500;
    }
  }
  @media screen and (max-width: 576px) {
    .main-grid {
      .inside-grid {
        /* top: 3rem; */
        z-index: 5;
        /* top: 8rem; */
      }
      .tabimg {
        display: none;
      }
    }
    .animationclass{

      .lottieimg svg {
        display: none !important;
        
        /* width:50%; */
        /* margin: 0 auto; */
      }
    }
   
    .text-position {
      /* position:absolute; */
      margin-top: 5rem;
      text-align: center;
      .css-130rcti {
        font-size: 2.45rem;
        font-weight:900;
        font-family: muli;
      }
      .head2{
        /* font-size: 1.5rem; */
      }
    }

    .css-ucfc1 {
      display: none;
    }
  }

  .css-130rcti {
    font-size: 3.4rem;
    line-height: 3.9rem;
    color: white;
    font-family: muli;
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
  }

  .inside-grid {
    /* position: relative; */
  }
  .text-position {
    /* position:absolute; */
    /* margin-top:5rem; */
    z-index: 2;
    font-weight: 500;
  }
  .short-line {
    margin-top: 2rem;
    font-size: 1.2rem !important;
    opacity: 0.5;
    font-family: muli;
    font-weight: lighter;
  }

 

  .css-ucfc1 {
    z-index: -1;
    position: relative;
    height: 100%;
    width: 50%;
    top: -23rem;
    margin-left: 20rem;
    /* left: 25vw; */
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
