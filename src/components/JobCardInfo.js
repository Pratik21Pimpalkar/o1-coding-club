import { Business, DateRange, LocationOn, WatchLater } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import JobCardHeader from "./JobCardHeader";

export default function JobCardInfo(props) {
    const handleViewButton = (id) => {
        props.changeId(id)
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            padding: '0.5rem',
            border: '1px solid white',
            margin: '0.5rem 0rem',
            borderRadius: '0.5rem',
            gap: 1,
            backgroundColor: props.selectedId === props.id ? '#1B2430' : 'transparent'
        }}>
            <JobCardHeader
                title={props.title}
                name={props.name}
                location={props.location}
                deadlineDate={props.deadlineDate}
                duration={props.duration}
                experience={props.experience}
                type={props.type}
                showTimeline={true} />
            <Divider sx={{
                borderColor: 'white'
            }} />
            <div style={{
                marginLeft: 'auto'
            }}>
                <button
                    className="btn-giveTest btn fullwidthbtn styleInJobApplyButton"
                    style={{
                        marginTop: '0rem'
                    }}
                    onClick={() => handleViewButton(props.id)}
                >
                    View
                </button>
            </div>
        </Box>
    )
}