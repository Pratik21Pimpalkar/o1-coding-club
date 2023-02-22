import { Box, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../TextFieldStyle.css"
import CustomTextField from "../CustomTextField";

export default function FormIntern() {

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 4;

    const [formData, setFormData] = useState({
        type: 'Internship',
        title: '',
        organisation: '',
        websiteURL: '',
        about: '',
        noOfApplicationsAllowed: '',
        applicationStartDate: '',
        applicationEndDate: '',
        stipend: 'Paid',
        stipendType: 'Range',
        stipendAmount: '',
        stipendMinAmount: '',
        stipendMaxAmount: '',
        variable: '',
        noOfOpenings: '',
        workDays: '5 Days',
        internshipType: 'On Field',
        internshipTiming: 'Full Time',
        internshipLocation: ''
    });

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleForm = (e) => {
        e.preventDefault()
        if (formData.title.trim() === '') {
            toast.error("Invalid title");
            return;
        }
        if (formData.organisation.trim() === '') {
            toast.error("Invalid Organisation name");
            return;
        }
        if (formData.websiteURL.length > 0) {
            let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            if (!(!!pattern.test(formData.websiteURL))) {
                toast.error('Invalid Website URL')
                return
            }
        }
        if (formData.about.trim() === '') {
            toast.error("Invalid Description");
            return;
        }
        if (formData.applicationStartDate.trim() === '' && activeStep >= 1) {
            toast.error("Invalid Start Date");
            return;
        }
        if (formData.applicationEndDate.trim() === '' && activeStep >= 1) {
            toast.error("Invalid End Date");
            return;
        }
        if (formData.stipend === 'Paid') {

            if (formData.stipendType === 'Fixed' && activeStep >= 2) {
                if (!formData.stipendAmount) {
                    toast.error('Stipend amount field required')
                    return
                }
                if (formData.stipendAmount < 0) {
                    toast.error('Amount should not be negative')
                    return
                }
            }
            if (formData.stipendType === 'Range' && activeStep >= 2) {
                if (!formData.stipendMinAmount || !formData.stipendMaxAmount) {
                    toast.error('Stipend amount field required')
                    return
                }
                if (formData.stipendMinAmount < 0 || formData.stipendMaxAmount < 0) {
                    toast.error('Amount should not be negative')
                    return
                }
            }
        }
        if (activeStep >= 3) {
            if (!formData.noOfOpenings) {
                toast.error('Openings field required')
                return
            }
            if (formData.noOfOpenings < 0) {
                toast.error('Openings should not be negative')
                return
            }
        }
        if (formData.internshipType !== 'Work From Home') {
            if (formData.internshipLocation.trim().length === 0 && activeStep >= 3) {
                toast.error('Invalid intenship Location')
                return
            }
        }
        if (activeStep !== maxSteps - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        if (activeStep === maxSteps - 1) {
            console.log(formData)
        }
    }

    return (
        <>
            <Container maxWidth='lg' sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box width={{ xs: '100%', md: '70vw' }} bgcolor='#0b1b2a' margin={'2rem 0rem'} sx={{
                    borderRadius: '1rem',
                    padding: { xs: 3, md: 4 },
                    paddingTop: { xs: 5, md: 4 }
                }}>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{
                        '& .MuiStepLabel-root .Mui-completed': {
                            color: '#8831ff', // circle color (COMPLETED)
                        },
                        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                        {
                            color: 'whitesmoke', // Just text label (COMPLETED)
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                            color: '#8831ff', // circle color (ACTIVE)
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                        {
                            color: 'common.white', // Just text label (ACTIVE)
                        },
                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                            fill: 'white', // circle's number (ACTIVE)
                        },
                        "& .Mui-disabled .MuiStepIcon-root, & .Mui-disabled .MuiStepLabel-alternativeLabel ": { color: "grey.500" },
                        marginBottom: '1rem'

                    }}>
                        <Step key={'Basic-Data'}
                        >
                            <StepLabel>Basic Data</StepLabel>
                        </Step>
                        <Step key={'Application-Data'}>
                            <StepLabel>Application Data</StepLabel>
                        </Step>
                        <Step key={'Stipend-Details'}>
                            <StepLabel>Stipend Details</StepLabel>
                        </Step>
                        <Step key={'Internship-Details'}>
                            <StepLabel style={{
                                color: 'red'
                            }}>Internship Details</StepLabel>
                        </Step>
                    </Stepper>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            bgcolor: '#0b1b2a',
                            color: 'white'
                        }}
                    >
                        <Typography variant="h4" fontWeight={700} color={'#8831ff'} sx={{
                            fontSize: { xs: '1.75rem', md: '2.5rem' }
                        }}>{activeStep === 0 ? 'Basic Details' : activeStep === 1 ? 'Application Details' : activeStep === 2 ? 'Stipend Details' : 'Internship Details'}</Typography>
                    </Paper>
                    <Box sx={{ width: '100%' }} component={'form'}>
                        {activeStep === 0 && <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexDirection: 'column',
                            marginTop: '1rem',
                        }}>

                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="title"
                                type="text"
                                label="Opportunity Title"
                                onChange={handleInputs}
                                value={formData.title}
                                variant="filled"
                                color="secondary"
                                required
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="organisation"
                                type="text"
                                label="Enter Your Organisation"
                                onChange={handleInputs}
                                value={formData.organisation}
                                variant="filled"
                                color="secondary"
                                required
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="websiteURL"
                                type="url"
                                label="Website URL"
                                onChange={handleInputs}
                                value={formData.websiteURL}
                                variant="filled"
                                color="secondary"
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="about"
                                type="text"
                                label="About the Internship"
                                onChange={handleInputs}
                                value={formData.about}
                                variant="filled"
                                color="secondary"
                                multiline
                                minRows={4}
                                required
                            />
                        </Box>}

                        {activeStep === 1 && <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexDirection: 'column',
                            marginTop: '1rem',
                        }}>
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="noOfApplicationsAllowed"
                                type="number"
                                label="Number of Applications Allowed"
                                onChange={handleInputs}
                                value={formData.noOfApplicationsAllowed}
                                variant="filled"
                                color="secondary"
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="applicationStartDate"
                                type="text"
                                label="Application Start Date"
                                placeholder="DD/MM/YYYY"
                                onChange={handleInputs}
                                value={formData.applicationStartDate}
                                variant="filled"
                                color="secondary"
                                required
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="applicationEndDate"
                                type="text"
                                label="Application End Date"
                                placeholder="DD/MM/YYYY"
                                onChange={handleInputs}
                                value={formData.applicationEndDate}
                                variant="filled"
                                color="secondary"
                                required
                            />
                            {/* <FormControl component="div" sx={{
                                bgcolor: 'red'
                            }}>
                                <FormControlLabel
                                    value="end"
                                    control={<Box><Switch color="primary" /></Box>}
                                    label="Would you like to collect resumes? "
                                    labelPlacement="start"
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </FormControl> */}


                        </Box>}

                        {activeStep === 2 && <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexDirection: 'column',
                            marginTop: '1rem',
                        }}>
                            <FormControl required>
                                <FormLabel id="Stipend" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Stipend</FormLabel>
                                <RadioGroup
                                    row
                                    name="stipend"
                                    value={formData.stipend}
                                    onChange={handleInputs}
                                >
                                    <FormControlLabel value="Paid" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Paid" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Unpaid" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Unpaid" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>

                            {formData.stipend === 'Paid' && <FormControl required>
                                <FormLabel id="stipendType" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Stipend type</FormLabel>
                                <RadioGroup
                                    row
                                    id="stipendType"
                                    name="stipendType"
                                    value={formData.stipendType}
                                    onChange={handleInputs}
                                >
                                    <FormControlLabel value="Range" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Range" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Fixed" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Fixed" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>}

                            {formData.stipendType === 'Range' && formData.stipend === 'Paid' && <Box display={'flex'} justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                                <CustomTextField
                                    margin={"dense"}
                                    fullWidth
                                    name="stipendMinAmount"
                                    type="number"
                                    label="Minimum Stipend amount"
                                    variant="filled"
                                    color="secondary"
                                    onChange={handleInputs}
                                    value={formData.stipendMinAmount}
                                    required
                                />
                                <CustomTextField
                                    margin={"dense"}
                                    fullWidth
                                    name="stipendMaxAmount"
                                    type="number"
                                    label="Maximum Stipend Amount"
                                    variant="filled"
                                    onChange={handleInputs}
                                    value={formData.stipendMaxAmount}
                                    color="secondary"
                                    required
                                />
                            </Box>}

                            {formData.stipendType === 'Fixed' && formData.stipend === 'Paid' && <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="stipendAmount"
                                type="text"
                                label="Stipend/Month"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.stipendAmount}
                                color="secondary"
                                required
                            />}

                            {formData.stipend === 'Paid' && <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="variable"
                                type="text"
                                placeholder="Ex. INR 13 LPA to INR 18 LPA"
                                onChange={handleInputs}
                                value={formData.variable}
                                label="Variable"
                                variant="filled"
                                color="secondary"
                            />}
                        </Box>}
                        {activeStep === 3 && <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexDirection: 'column',
                            marginTop: '1rem',
                        }}>
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="noOfOpenings"
                                type="number"
                                label="No. of Openings"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.noOfOpenings}
                                color="secondary"
                                required
                            />

                            <FormControl required>
                                <FormLabel id="workDays" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Work Days</FormLabel>
                                <RadioGroup
                                    row
                                    id="workDays"
                                    name="workDays"
                                    value={formData.workDays}
                                    onChange={handleInputs}
                                >
                                    <FormControlLabel value="4 Days" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="4 Days" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="5 Days" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="5 Days" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="6 Days" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="6 Days" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>

                            <FormControl required>
                                <FormLabel id="internshipType" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Internship Type</FormLabel>
                                <RadioGroup
                                    row
                                    id="internshipType"
                                    name="internshipType"
                                    value={formData.internshipType}
                                    onChange={handleInputs}
                                >
                                    <FormControlLabel value="In Office" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="In Office" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Work From Home" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Work From Home" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="On Field" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="On Field" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Hybrid" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Hybrid" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel id="internshipTiming" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Internship Timing</FormLabel>
                                <RadioGroup
                                    row
                                    id="internshipTiming"
                                    name="internshipTiming"
                                    value={formData.internshipTiming}
                                    onChange={handleInputs}

                                >
                                    <FormControlLabel value="Full Time" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Full Time" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Part Time" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Part Time" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Contractual/Temporary" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Contractual/Temporary" style={{
                                        color: 'white'
                                    }} />
                                    <FormControlLabel value="Volunteer" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Volunteer" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>

                            {formData.internshipType !== 'Work From Home' && <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="internshipLocation"
                                type="text"
                                label="Internship Location"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.internshipLocation}
                                color="secondary"
                                required
                            />}

                        </Box>}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {activeStep !== 0 && <button
                            className="btn-giveTest"
                            style={{ marginTop: "1rem", position: "static", marginLeft: '' }}
                            disabled={activeStep === 0}
                            onClick={handleBack}>
                            {'Previous'}
                        </button>}
                        {activeStep < 3 && <button
                            className="btn-giveTest"
                            style={{ marginTop: "1rem", position: "static", marginLeft: 'auto' }}
                            disabled={activeStep === maxSteps - 1}
                            onClick={handleForm}>
                            Next
                        </button>}
                        {activeStep === 3 && <button
                            className="btn-giveTest"
                            style={{ marginTop: "1rem", position: "static", marginLeft: 'auto' }}
                            // disabled={activeStep === maxSteps - 1}
                            onClick={handleForm}>
                            Post
                        </button>}
                    </Box>

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