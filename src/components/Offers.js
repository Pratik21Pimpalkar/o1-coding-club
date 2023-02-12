import { Container } from '@mui/system'
import React from 'react'
import offer from '../Assets/Placekit/offer.png'

const Offers = () => {
    return (
        <Container>
            <img src={offer} alt="offer" style={{ width: "100%" }} />
        </Container>
    )
}

export default Offers