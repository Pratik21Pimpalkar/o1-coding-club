import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import bg from "../Assets/3.svg";
import styled from "styled-components";
const Hero = () => {
  return (
    <HeroWrapper style={{ 
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        color:"white",
      }}>
      {/* <img src={bg} alt="" /> */}
      <Container maxWidth={"lg"}>
        <Grid container className="main-grid">
          <Grid  item xs={12} md={8} className="inside-grid">
            <Typography
              variant="h2"
              style={{
                fontFamily: "Open Sans,Ubuntu ,sans-serif",
                fontWeight: "700",
                fontSize: "5vw",
            
              }}
            >
              O(1) Coding Club
            </Typography>
            <Typography 
              variant="h6"
             className="short-line"

            >
              Closer to your AMBITIONS,a step at a time.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </HeroWrapper>
  );
};
const HeroWrapper = styled.div`
  /* min-height: 100vh; */
  position: relative;
  img {
    height: 100vh;
    width: 100vw;
 
    /* position: absolute; */
  }
  .main-grid{
    position:relative;
  }
.inside-grid{
    position:absolute;
    top:13rem;
    font-family: "Open Sans,Ubuntu ,sans-serif";

font-weight: 500;
}
.short-line{

                margin-top:2rem;
}
`;
export default Hero;
