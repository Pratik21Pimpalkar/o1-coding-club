import { Box, Grid, Typography } from "@mui/material";
import HiringBox from "../HiringBox";

export default function ManageJobsAndIntern() {
    return (
        <>
            <Box sx={{
                width: '90vw',
                backgroundColor: '#0b1b2a',
                borderRadius: '1rem',
                margin: { xs: 2, md: 5 },
                padding: { xs: 3, md: 4 }
            }}>
                <Typography variant="h5" fontWeight={400} color={'white'}>Manage Jobs / Internship</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <HiringBox type={'Job'} link={'/company/manage/jobs'} body={'Manage Jobs'} />
                    </Grid>
                    <Grid item xs={4}>
                        <HiringBox type={'Internship'} link={'/company/manage/intern'} body={'Manage Internship'} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}