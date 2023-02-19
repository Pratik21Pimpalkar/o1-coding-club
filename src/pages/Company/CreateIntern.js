import { Container, Typography } from "@mui/material";
import React from "react";
import InternForm from "../../components/company/InternForm";
import Navbar from "../../components/NavbarMain";

export default function CreateIntern() {
    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth='xl'>
                <Typography variant="h3" color={'white'} marginTop={'6rem'} textAlign={'center'}>Create Internship</Typography>
                <InternForm />
            </Container>
        </React.Fragment>
    )
}