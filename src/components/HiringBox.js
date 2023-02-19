import { ArrowForward, Work } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HiringBox(props) {
    return (
        <Box display={'flex'} bgcolor={'#31135E'} color={'white'}
            sx={{
                padding: '1rem',
                marginTop: '1rem',
                alignItems: 'center',
                gap: 2,
                borderRadius: '1rem',
            }}>
            <Work fontSize="large" />
            <Box display={'flex'} flexDirection='column'>
                <Typography variant="h6">{props.type}</Typography>
                <Link to={props.link} style={{
                    color: 'white',
                    textDecoration: 'none'
                }}>
                    <Box display={'flex'}>
                        <Typography marginRight={'0.75rem'} variant="body1">{props.body}</Typography>
                        <ArrowForward />
                    </Box>
                </Link>
            </Box>
        </Box>
    )
}