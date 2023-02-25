import { Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JobCardHeader from "./JobCardHeader";

export default function JobInfo(props) {
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: "#1B2430",
            color: 'white',
            marginBottom: '2rem',
            padding: '1.5rem',
            marginBottom: '1rem',
            borderRadius: '1rem',
            gap: 2
        }}>
            <JobCardHeader
                title={props.title}
                name={props.name}
                location={props.location}
                deadlineDate={props.deadlineDate}
                duration={props.duration}
                experience={props.experience}
                type={props.type}
                showTimeline={true}
            />
            <Divider sx={{
                borderColor: 'white'
            }} />
            <Box display={'flex'} justifyContent='space-between' marginTop={'0.5rem'}>
                <Box display={'flex'} gap={1} alignItems='center'>
                    <Tooltip title='Delete'>
                        <IconButton>
                            <Delete sx={{
                                color: 'white'
                            }} />
                        </IconButton>
                    </Tooltip>
                    <Typography>Delete</Typography>
                </Box>
                <div>
                    <button
                        className="btn-giveTest btn fullwidthbtn styleInJobApplyButton"
                        style={{
                            marginTop: '0rem'
                        }}
                        onClick={() => {
                            navigate(`/opportunities/${props.id}/register`)
                        }}
                    >
                        Apply
                    </button>
                </div>
            </Box>
        </Box>
    )
}