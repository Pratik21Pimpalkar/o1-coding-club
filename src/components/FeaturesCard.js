import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import beginLogo from '../Assets/1.png'
import handsOnLogo from '../Assets/11.png'
import keepItSimplelogo from '../Assets/33.png'
import domainLogo from '../Assets/44.png'
import { Container } from '@mui/system'

const FeaturesCard = () => {
    return (
        <FeaturesCardWrapper>
            <Container>
                <Grid container maxWidth={'lg'} justifyContent={'center'} spacing={5}>
                    <Grid item xs={12} md={3}>
                        <div className="card">
                            <div className='imgdiv'><img src={beginLogo} alt="" /></div>
                            <div className='contentdetails'>
                                <h4>Beginner Friendly</h4>
                                <p>Our programs are tailor made and are beginner friendly. We want all to prosper and none to be left behind.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="card">
                            <div className='imgdiv'><img src={handsOnLogo} alt="" /></div>
                            <div className='contentdetails'>
                                <h4>Hands On</h4>
                                <p>Create from your learning. We focus on hands on. We believe practical knowledge is as important as conceptual knowledge.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="card">
                            <div className='imgdiv'><img src={keepItSimplelogo} alt="" /></div>
                            <div className='contentdetails'>
                                <h4>Keep it Simple</h4>
                                <p>We believe in simplicity. Learning can be very simple if you have the right approach. Keep simple, learn more.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="card">
                            <div className='imgdiv'><img src={domainLogo} alt="" /></div>
                            <div className='contentdetails'>
                                <h4>Domain Specialists</h4>
                                <p>We got experts in each domain to make your learning smooth and get you equipped with the right skills, the right way.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </FeaturesCardWrapper>
    )
}

const FeaturesCardWrapper = styled.div`
margin: 5rem 0;
.card{
    width: 100%;
    height: 25rem;
    display: flex;
    padding: 2rem;
    background-color:#140230;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .imgdiv{
        width:7rem ;
        img{
            width: 100%;
        }
    }
    .contentdetails{
        color:#FFFFFF;
        text-align: center;
       h4{
        font-size: 1.8rem;
    line-height: 3.2rem;
       }
       p{
        opacity: 70%;
    font-size: 1rem;
    line-height: 1.6rem;
       }
    }
}
`

export default FeaturesCard