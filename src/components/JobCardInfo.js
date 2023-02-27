import { Business, DateRange, LocationOn, WatchLater } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { opportunitiesActions } from "../store/opportunities-slice";
import JobCardHeader from "./JobCardHeader";
import DUMMY_DATA from "./DummyData";

export default function JobCardInfo(props) {
    const dispatch = useDispatch()
    const handleViewButton = () => {
        const jobData = DUMMY_DATA.find(job => job.id === props.id)
        dispatch(opportunitiesActions.loadJobDetails({ jobData: jobData }))
        // props.changeId(id)
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
                    onClick={handleViewButton}
                >
                    View
                </button>
            </div>
        </Box>
    )
}