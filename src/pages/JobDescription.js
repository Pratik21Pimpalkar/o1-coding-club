import { Box, Typography } from "@mui/material";

export default function JobDescription(props) {
    const data = props.jobInfo
    return (
        <Box sx={{
            color: 'white',
            bgcolor: "#1B2430",
            marginBottom: '2rem',
            padding: '1.5rem',
            marginBottom: '1rem',
            borderRadius: '1rem',
        }}>
            <Typography variant="h5" fontWeight={700} marginBottom="1rem">Job Description:</Typography>
            <Typography variant="body1">{data.about}</Typography>
        </Box>
    )
}