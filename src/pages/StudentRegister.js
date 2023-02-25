import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomTextField from "../components/CustomTextField";
import Navbar from "../components/NavbarMain";

export default function StudentRegister() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [file, setFile] = useState(null)

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (formData.name.trim() === '') {
            toast.error("Invalid Name");
            return;
        }
        if (formData.email.trim() === '') {
            toast.error("Invalid Email");
            return;
        }
        if (formData.phone.trim() === '') {
            toast.error("Invalid Mobile Number");
            return;
        }
        console.log(formData)
    }

    return (
        <>
            <Navbar />
            <Container maxWidth='xl' disableGutters sx={{
                borderRadius: '1rem',
                color: 'white',
                paddingTop: '7rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h4" textAlign={'center'}>Registration Page</Typography>
                <Box component={'form'} width={{ xs: '100%', md: '70vw' }} bgcolor='#0b1b2a' margin={'2rem 0rem'} sx={{
                    borderRadius: '1rem',
                    padding: { xs: 3, md: 4 },
                    paddingTop: { xs: 5, md: 4 }
                }}>
                    <CustomTextField
                        margin={"dense"}
                        fullWidth
                        name="name"
                        type="text"
                        label="Name"
                        onChange={handleInputs}
                        value={formData.name}
                        variant="filled"
                        color="secondary"
                        required
                    />
                    <CustomTextField
                        margin={"dense"}
                        fullWidth
                        name="email"
                        type="text"
                        label="Email"
                        onChange={handleInputs}
                        value={formData.email}
                        variant="filled"
                        color="secondary"
                        required
                    />
                    <CustomTextField
                        margin={"dense"}
                        fullWidth
                        name="phone"
                        type="tel"
                        label="Mobile Number"
                        onChange={handleInputs}
                        value={formData.phone}
                        variant="filled"
                        color="secondary"
                        required
                    />

                    <button
                        type="submit"
                        className="btn-giveTest"
                        style={{ marginTop: "1rem", position: "static", marginLeft: '' }}
                        onClick={handleFormSubmit}>
                        Submit
                    </button>
                </Box>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="colored"
                    pauseOnHover
                />
            </Container>
        </>
    )
}