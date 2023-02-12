import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Circle from "../Circle";

export default function MainContent(props) {
    const nonMobileScreenSize = useMediaQuery('(max-width:600px)')
    const s = "Not just a coding platform, but a complete placement ecosystem with strong  emphasis on high quality placement training & support, not only equipping  you with relevant job market skills but providing every help to land your  dream job.";
    return (
        <Container maxWidth='lg' sx={{
            marginTop: { xs: '5rem', md: '5rem' },
            padding: { xs: '0.75rem 0rem', md: '3rem 2rem', lg: '2rem 1rem' }
        }}>
            <Box display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} width={'100%'}
                sx={{
                    padding: '1rem',
                    gap: 2
                }}>
                <Box
                    display={'flex'}
                    alignItems='center'
                    width={'100%'}
                >
                    <Box>
                        <Typography variant="h1" sx={{
                            color: 'white',
                            fontWeight: 600,
                            fontFamily: 'Muli',
                            textAlign: { xs: 'center', md: 'start' },
                            fontSize: props.size ? { xs: '2.5rem', sm: '3.5rem', md: '6rem' } : { xs: '2.5rem', sm: '4rem', md: '6rem' }
                        }}>{props.name.programName}</Typography>

                        {nonMobileScreenSize && <Box sx={{
                            margin: '1.5rem 0rem',
                            height: { xs: '16rem', sm: '25rem', md: '29rem', lg: '34rem' },
                            width: { xs: '16rem', sm: '25rem', md: '29rem', lg: '34rem' },
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                            <Circle />
                        </Box>}
                        <Box sx={{
                            maxWidth: '29rem'
                        }}>
                            <Typography margin={1} textAlign={{ xs: 'center', md: 'start' }} color={'rgba(255,255,255,0.5)'}
                                sx={{
                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
                                }}>
                                {props.desc ? props.desc : s}
                            </Typography>
                        </Box>

                        {props.name.linktoregister ? (
                            <Box display={'flex'} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                                <HashLink
                                    smooth
                                    to={props.name?.applyNowURL}
                                    title="O1 Analysis"
                                >
                                    <button className="btn-giveTest btn-giveTest-responsive">{props.name.programName === "PlaceKit" ? "Enroll" : "Apply"}</button>{" "}
                                </HashLink>
                            </Box>
                        ) : null}
                    </Box>
                </Box>

                {!nonMobileScreenSize && <Box
                    display={'flex'}
                    justifyContent='center'
                >
                    <Box sx={{
                        height: { xs: '20rem', sm: '25rem', md: '25rem', lg: '34rem' },
                        width: { xs: '20rem', sm: '25rem', md: '25rem', lg: '34rem' },
                    }}>
                        <Circle />
                    </Box>
                </Box>}
            </Box>
        </Container>
    )
}