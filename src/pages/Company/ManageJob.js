import { Box, Container, Typography } from "@mui/material";
import JobList from "../../components/company/JobList";
import DUMMY_DATA from "../../components/DummyData";
import Navbar from "../../components/NavbarMain";

export default function ManageJob() {

    const data = DUMMY_DATA.filter(data => (
        data.type === 'Job'
    ))

    return (
        <>
            <Navbar />
            <Container maxWidth='xl' sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    marginTop: '6rem'
                }}>
                    <Typography variant="h4" color={'white'} textAlign={'center'} marginBottom='1rem'>Manage Jobs</Typography>
                    <JobList jobData={data} />
                </Box>
            </Container>
        </>
    )
}