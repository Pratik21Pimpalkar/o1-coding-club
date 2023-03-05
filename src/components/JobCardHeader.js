import { Business, DateRange, Edit, LocationOn, WatchLater } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function JobCardHeader(props) {
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: 2
            }}>
                <Box sx={{
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    "& .image": {
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover'
                    }
                }}>
                    <img className="image" width={'100%'} src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="Organisation Logo" />
                </Box>
                <Box display={'flex'} flexDirection='column' gap={1}>
                    <Box display={'flex'} alignItems='center'>
                        {props.isMainPage ?
                            <Link to={`/opportunities/${props.id}`}>
                                <Typography variant="h5" fontWeight={'700'} color='white'>{props.title}</Typography>
                            </Link>
                            :
                            <Typography variant="h5" fontWeight={'700'} color='white'>{props.title}</Typography>}

                    </Box>
                    <Box display={'flex'} alignItems='center' gap={1}>
                        <Business />
                        <Typography variant="body1">{props.name}</Typography>
                    </Box>
                    <Box display={'flex'} alignItems='center' gap={1}>
                        <LocationOn />
                        <Typography variant="body1">{props.location}</Typography>
                    </Box>
                </Box>
                {/* {props.isAdmin && <Box display={'flex'} gap={1} alignItems='center' marginLeft={'auto'}>
                    <Tooltip title='Edit'>
                        <IconButton>
                            <Edit sx={{
                                color: 'white'
                            }} />
                        </IconButton>
                    </Tooltip>
                    <Typography>Edit</Typography>
                </Box>} */}
            </Box>
            {props.showTimeline && <Box display={'flex'} justifyContent='space-evenly' gap={2}>
                <Box display={'flex'} alignItems='center' gap={1}>
                    <DateRange />
                    <Typography variant="body1">LastDate: {props.deadlineDate}</Typography>
                </Box>
                {props.type === 'Internship' && <Box display={'flex'} alignItems='center' gap={1}>
                    <WatchLater />
                    <Typography variant="body1">Duration: {props.duration} Month(s)</Typography>
                </Box>}
                {props.type === 'Job' && <Box display={'flex'} alignItems='center' gap={1}>
                    <Typography variant="body1">Experience: {props.experience} Year(s)</Typography>
                </Box>}
            </Box>}

        </>
    )
}