import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const StatsBackground = {
    backgroundColor: "#1e0045", color: "#eaf6ff", padding: '3rem',
    backgroundImage: 'radial-gradient(#ffffff 1.05px, transparent 1.05px), radial-gradient(#ffffff 1.05px, #1E0045 1.05px)',
    backgroundSize: "49px 41px",
    backgroundPosition: "0 0, 21px 21px",
}
const Stats = () => {
    return (
        <Container maxWidth='xl' style={StatsBackground}>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center' > 100%</Typography>
                        <Typography variant='h5' align='center' > Placements</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'> 50+</Typography>
                        <Typography variant='h5' align='center'> Dream Companies Cracked</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'>50+</Typography>
                        <Typography variant='h5' align='center'> Placed in Amazon</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant='h2' align='center'> 500+</Typography>
                        <Typography variant='h5' align='center'>Students Placed</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Stats