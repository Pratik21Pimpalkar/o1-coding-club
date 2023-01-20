import React from 'react'
import p1 from '../Assets/Placekit/week 1 to 6 (o1).png'
import p2 from '../Assets/Placekit/week 7 to 12 (o1).png'
import p3 from '../Assets/Placekit/week 13 to 18 (o1).png'
import p4 from '../Assets/Placekit/week 19 to 24 (o1).png'
import { Box, Container } from '@mui/material'
const Banner = () => {
    return (
        <Container maxWidth='md'>
            
            <img src={p1} alt="" style={{ width: "100%", marginTop:"1rem" }} />
            <img src={p2} alt="" style={{ width: "100%", marginTop:"1rem" }} />
            <img src={p3} alt="" style={{ width: "100%", marginTop:"1rem" }} />
            <img src={p4} alt="" style={{ width: "100%", marginTop:"1rem" }} />
        </Container>
    )
}

export default Banner