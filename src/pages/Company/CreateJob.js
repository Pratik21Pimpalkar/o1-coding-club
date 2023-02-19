import { Container, Typography } from "@mui/material";
import React from "react";
import JobForm from "../../components/company/JobForm";
import Navbar from "../../components/NavbarMain";

export default function CreateJob() {
    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth='xl'>
                <Typography variant="h3" marginTop={'6rem'} color={'white'} textAlign={'center'}>Create Job</Typography>
                <JobForm />
            </Container>
        </React.Fragment>
    )
}