import { Box, Container, Typography } from "@mui/material";
import HiringBanner from "../../components/company/HiringBanner";
import ManageJobsAndIntern from "../../components/company/ManageJobsAndIntern";
import Navbar from "../../components/NavbarMain";

export default function ManageDashboard() {
    return (
        <Container disableGutters maxWidth='xl'>
            <Navbar />
            <Container disableGutters maxWidth='xl' sx={{
                marginTop: '5rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '2rem'
            }}>
                <Box width={'90vw'}>
                    <Typography variant="h3" color={'white'}>Host an Opportunity</Typography>
                    <Typography variant="h5" color={'white'}>Choose your opportunity category from below</Typography>
                </Box>
                <HiringBanner />
                <ManageJobsAndIntern />
            </Container>
        </Container>
    )
}