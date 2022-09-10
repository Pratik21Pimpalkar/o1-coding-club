import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import wave from "../Assets/wave1.svg"
import styled from 'styled-components'
const Hero = () => {
    return (
        <HeroWrapper> 
      <img src={wave} alt="" width={"100%"}/>

        <Container maxWidth={"lg"} >
            <Grid container  >
                <Grid item xs={12} md={8}>
                    <Typography variant='h2' style={{ fontFamily: "Open Sans,Ubuntu ,sans-serif", fontWeight: "700", fontSize: "5rem" ,color:"#b97cfd"}}>O(1) Coding Club</Typography>
                    <Typography variant='h6' style={{ fontFamily: "Open Sans,Ubuntu ,sans-serif", fontWeight: "500" }}>Closer to your AMBITIONS,a step at a time.</Typography>
                </Grid>
            </Grid>
        </Container>
        </HeroWrapper>
    )
}
const HeroWrapper=styled.div`
position: relative;
img{
    position:absolute
}

`
export default Hero