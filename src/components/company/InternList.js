import { Box, Typography } from "@mui/material";
import WorkListItem from "./WorkListItem";

export default function InternList(props) {
    return (
        <>
            <Box sx={{
                textAlign: 'center',

            }}>
                <Box width={'50vw'} display='flex' flexDirection={'column'} gap={1}>
                    {props.internData.map(job => <WorkListItem
                        key={job.id}
                        id={job.id}
                        type={job.type}
                        name={job.name}
                        title={job.title}
                        deadlineDate={job.applicationEndDate}
                        location={job.location}
                        duration={job.duration}
                        work={'intern'}
                    />)}
                </Box>
            </Box>
        </>
    )
}