import { ArrowForward, Work } from "@mui/icons-material";
import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HiringBox from "../HiringBox";

const OpportunityBanner = styled(Box)({
    width: '90vw',
    backgroundColor: '#0b1b2a',
    borderRadius: '1rem'
})

export default function HiringBanner() {
    return (
        <React.Fragment>
            <OpportunityBanner margin={{ xs: 2, md: 5 }} padding={{ xs: 3, md: 4 }} >
                <Typography variant="h5" fontWeight={400} color={'white'}>For Hiring the right talent</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <HiringBox type={'Job'} link={'/company/manage/jobs/new'} body={'Create a Job'} />
                    </Grid>
                    <Grid item xs={4}>
                        <HiringBox type={'Internship'} link={'/company/manage/intern/new'} body={'Create a Internship'} />
                    </Grid>
                </Grid>
            </OpportunityBanner>
        </React.Fragment>
    )
}