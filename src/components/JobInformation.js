import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, IconButton, Tooltip } from "@mui/material";
import { BookmarkBorder, Bookmark, Edit } from "@mui/icons-material";
import JobCardHeader from "./JobCardHeader";

const JobInformation = (props) => {
  const navigate = useNavigate();

  const data = props.jobInfo
  console.log(data)

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
        name={data.name}
        title={data.title}
        location={data.location}
        isAdmin={props.isAdmin}
      />

      {!props.isAdmin && <Divider sx={{
        borderColor: 'white'
      }} />}
      {!props.isAdmin && <Box display={'flex'} justifyContent='space-between' marginTop={'0.5rem'}>
        <Box display={'flex'} gap={1} alignItems='center'>
          <Tooltip title='Bookmark'>
            <IconButton>
              {data.isBookmarked ? <Bookmark sx={{
                color: 'white'
              }} /> : <BookmarkBorder sx={{
                color: 'white'
              }} />}
            </IconButton>
          </Tooltip>
          <Typography>Bookmark</Typography>
        </Box>
        <div>
          <button
            className="btn-giveTest btn fullwidthbtn styleInJobApplyButton"
            style={{
              marginTop: '0rem'
            }}
            onClick={() => {
              navigate(`/opportunities/${data.id}/register`)
            }}
          >
            Apply
          </button>
        </div>
      </Box>}
    </Box>
  )
};

export default JobInformation;

