import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import slider_bg from '../Assets/slider_bg.svg'


const StatsBackground = {
    background: `url(${slider_bg}) no-repeat center  #31135e`,
    color:"white",
    backgroundPosition: "0 0, 21px 21px",
    padding:"8rem 0",
    backgroundSize:"cover",
}
const Stats = ({data}) => {
    return (
        <Container maxWidth='xl' style={StatsBackground}>
            <Container maxWidth="xl">
                <Grid container spacing={5}>    
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center' >{data.stats.placements}</Typography>
                        <Typography variant='h5' align='center' > Placements</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'> {data.stats.companycracked}</Typography>
                        <Typography variant='h5' align='center'> Dream Companies Cracked</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'>{data.stats.placedinamazon}</Typography>
                        <Typography variant='h5' align='center'> Placed in Amazon</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'>{data.stats.studentplaced}</Typography>
                        <Typography variant='h5' align='center'>Students Placed</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Stats