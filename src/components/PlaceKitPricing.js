import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const PlaceKitPricing = () => {
    return (
        <Wrapper>
            <div className='priceInfo'>
                <div className='secondDiv'>
                    <Typography variant='h5'>
                        How much does a small coldrink 🥤 costs?</Typography>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: "800", marginTop: "0.3rem" }}>₹ 20</Typography>
                </div>
                <div className='firstDiv'>
                    <Typography variant='h5'>How much will this program cost you per day 🤔 ?</Typography>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: "800", marginTop: "0.8rem" }}>999/180 = ₹ 5.55/day</Typography>
                </div>

                <div className='thirdDiv'>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: "700", color: "#8933ff " }}>A question we should ask ourselves, a ₹5.55 investment on our future, why not? 🤷🏻‍♂️</Typography>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

display: flex;
justify-content: center ;
align-items: center;
margin: 0 1rem;
margin-top: 3rem;
.priceInfo{
    background-color: white;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 29rem;
    
    .firstDiv{
        padding: 1.62rem;
        border-bottom: 0.062rem solid grey;
    }
    .secondDiv{
        padding: 1.62rem;
        border-bottom: 0.062rem solid grey;        
    }
    .thirdDiv{
        padding: 1.62rem;
    }
}
`
export default PlaceKitPricing