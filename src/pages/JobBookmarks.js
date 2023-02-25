import { Box, Container, Typography } from "@mui/material";
import JobInfo from "../components/JobInfo";
import Navbar from "../components/NavbarMain";
import DUMMY_DATA from "../components/DummyData";

export default function JobBookmarks() {

    const filteredData = DUMMY_DATA.filter(data => data.isBookmarked)
    console.log(filteredData)

    return (
        <Container disableGutters maxWidth='xl' sx={{
        }}>
            <Navbar />
            <Container maxWidth='xl' sx={{
                paddingTop: '6rem',
                bgcolor: 'rgb(11, 0, 26)',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4
            }}>
                <Typography variant="h4" color={'white'} textAlign='center'>My Bookmarks</Typography>
                <Box width={'50vw'} display='flex' flexDirection={'column'} gap={1}>
                    {filteredData.map(job => <JobInfo
                        key={job.id}
                        id={job.id}
                        name={job.name}
                        title={job.title}
                        deadlineDate={job.applicationEndDate}
                        location={job.location}
                        duration={job.duration}
                        experience={job.experience}
                        type={job.type}
                    />
                    )}
                </Box>
            </Container>
        </Container>
    )
}