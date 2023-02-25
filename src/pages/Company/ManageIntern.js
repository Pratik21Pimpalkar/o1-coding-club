import { Box, Container, Typography } from "@mui/material";
import InternList from "../../components/company/InternList";
import Navbar from "../../components/NavbarMain";

import DUMMY_DATA from "../../components/DummyData";

export default function ManageIntern() {

    const internData = DUMMY_DATA.filter(data => (
        data.type === 'Internship' && data.name === 'Apple'
    ))

    console.log(internData)

    return (
        <>
            <Navbar />
            <Container maxWidth='xl' sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    marginTop: '6rem'
                }}>
                    <Typography variant="h4" color={'white'} textAlign='center' marginBottom={'1rem'}>Manage Internships</Typography>
                    <InternList internData={internData} />
                </Box>
            </Container>
        </>
    )
}