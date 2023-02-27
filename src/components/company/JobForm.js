import { Box, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomTextField from "../CustomTextField";

export default function FormJob() {

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 4;

    const [formData, setFormData] = useState({
        type: 'Job',
        title: '',
        organisation: '',
        websiteURL: '',
        categories: '',
        about: '',
        noOfApplicationsAllowed: '',
        applicationStartDate: '',
        applicationEndDate: '',
        salaryType: 'Range',
        salaryAmount: '',
        salaryMinAmount: '',
        salaryMaxAmount: '',
        experience: '',
        variable: '',
        noOfOpenings: '',
        workDays: '5 Days',
        jobType: 'In Office',
        jobTiming: 'Full Time',
        jobLocation: ''
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
            toast.error("Title field required");
            return;
        }
        if (formData.organisation.trim() === '') {
            toast.error("Organisation name field required");
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
            toast.error("Description field required");
            return;
        }
        if (activeStep >= 1) {
            if (formData.noOfApplicationsAllowed && formData.noOfApplicationsAllowed < 0) {
                toast.error('No. of application field cannot be negative')
                return
            }
            if (formData.applicationStartDate.trim() === '') {
                toast.error("Invalid Start Date");
                return;
            }
            if (formData.applicationEndDate.trim() === '') {
                toast.error("Invalid End Date");
                return;
            }
        }
        if (activeStep >= 2) {
            if (formData.salaryType === 'Fixed') {
                if (!formData.salaryAmount) {
                    toast.error('Salary amount field required')
                    return
                }
                if (formData.salaryAmount < 0) {
                    toast.error('Amount should not be negative')
                    return
                }
            }
            if (formData.salaryType === 'Range') {
                if (!formData.salaryMinAmount || !formData.salaryMaxAmount) {
                    toast.error('Salary amount field required')
                    return
                }
                if (formData.salaryMinAmount < 0 || formData.salaryMaxAmount < 0) {
                    toast.error('Amount should not be negative')
                    return
                }
            }
        }

        if (activeStep >= 3) {
            if (!formData.experience) {
                toast.error('Experience field required')
                return
            }
            if (formData.experience < 0) {
                toast.error('Experience cannot be negative')
                return
            }
            if (!formData.noOfOpenings) {
                toast.error('Openings field required')
                return
            }
            if (formData.noOfOpenings < 0) {
                toast.error('Openings should not be negative')
                return
            }
            if (formData.jobType !== 'Work From Home') {
                if (formData.jobLocation.trim().length === 0) {
                    toast.error('Job Location Field required')
                    return
                }
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
            <Container disableGutters maxWidth='lg' sx={{
                display: 'flex',
                justifyContent: 'center',
                // bgcolor: 'lightblue'

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
                            fill: 'secondary.main', // circle's number (ACTIVE)
                        },
                        "& .Mui-disabled .MuiStepIcon-root, & .Mui-disabled .MuiStepLabel-alternativeLabel ": { color: "grey.500" },
                        marginBottom: '1rem'

                    }}>
                        <Step key={'Basic-Data'}>
                            <StepLabel>Basic Details</StepLabel>
                        </Step>
                        <Step key={'Application-Details'}>
                            <StepLabel>Application Details</StepLabel>
                        </Step>
                        <Step key={'Salary-Details'}>
                            <StepLabel>Salary Details</StepLabel>
                        </Step>
                        <Step key={'Job-Details'}>
                            <StepLabel>Job Details</StepLabel>
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
                            bgcolor: '#0b1b2a'
                        }}
                    >
                        <Typography variant="h4" fontWeight={700} color={'#8831ff'} sx={{
                            fontSize: { xs: '1.75rem', md: '2.5rem' }
                        }}>{activeStep === 0 ? 'Basic Details' : activeStep === 1 ? 'Application Details' : activeStep === 2 ? 'Salary Details' : 'Job Details'}</Typography>
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
                                label="About the Job"
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

                            <FormControl>
                                <FormLabel id="salaryType" style={{
                                    color: 'white',
                                    textAlign: 'start'
                                }}>Salary Type</FormLabel>
                                <RadioGroup
                                    row
                                    id="salaryType"
                                    name="salaryType"
                                    value={formData.salaryType}
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
                            </FormControl>

                            {formData.salaryType === 'Range' && <Box display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} justifyContent='space-between' gap={2}>
                                <CustomTextField
                                    margin={"dense"}
                                    fullWidth
                                    name="salaryMinAmount"
                                    type="number"
                                    label="Minimum Salary amount"
                                    variant="filled"
                                    color="secondary"
                                    onChange={handleInputs}
                                    value={formData.salaryMinAmount}
                                    required
                                />
                                <CustomTextField
                                    margin={"dense"}
                                    fullWidth
                                    name="salaryMaxAmount"
                                    type="number"
                                    label="Maximum Salary Amount"
                                    variant="filled"
                                    onChange={handleInputs}
                                    value={formData.salaryMaxAmount}
                                    color="secondary"
                                    required
                                />
                            </Box>}

                            {formData.salaryType === 'Fixed' && <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="salaryAmount"
                                type="number"
                                label="Salary/Year"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.salaryAmount}
                                color="secondary"
                                required
                            />}

                            <CustomTextField
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
                            />
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
                                name="experience"
                                type="text"
                                label="Experience/Year"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.experience}
                                color="secondary"
                                required
                            />
                            <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="noOfOpenings"
                                type="text"
                                label="No. of Openings"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.noOfOpenings}
                                color="secondary"
                                required
                            />

                            <FormControl>
                                <FormLabel id="workDays" style={{
                                    color: 'white',
                                    fontWeight: 'bold',
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

                            <FormControl>
                                <FormLabel id="jobType" style={{
                                    color: 'white',
                                    textAlign: 'start',
                                    fontWeight: 'bold'
                                }}>Job Type</FormLabel>
                                <RadioGroup
                                    row
                                    id="jobType"
                                    name="jobType"
                                    value={formData.jobType}
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
                                    <FormControlLabel value="Hybrid" control={<Radio sx={{
                                        color: 'white'
                                    }} />} label="Hybrid" style={{
                                        color: 'white'
                                    }} />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel id="jobTiming" style={{
                                    color: 'white',
                                    textAlign: 'start',
                                    fontWeight: 'bold'
                                }}>Job Timing</FormLabel>
                                <RadioGroup
                                    row
                                    id="jobTiming"
                                    name="jobTiming"
                                    value={formData.jobTiming}
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

                            {formData.jobType !== 'Work From Home' && <CustomTextField
                                margin={"dense"}
                                fullWidth
                                name="jobLocation"
                                type="text"
                                label="Job Location"
                                variant="filled"
                                onChange={handleInputs}
                                value={formData.jobLocation}
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