import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from '@mui/icons-material/Telegram';

import { Stack } from "@mui/material";

const StackStyle = {
  color: "white",
  position: "absolute",
  top: "40vh",
  right: "3vw",
  lineHeight: "2px",
  fontSize: "2px",

};

const iconStyle = {
  color: "white",
};

const SocialMedia = () => {
  return (
    <div>
      <Stack style={StackStyle}>
        <a
          href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon sx={iconStyle} />
        </a>

        <a
          href="https://t.me/+diEKUu4Y-oY3NDFl"
          target="_blank"
          rel="noreferrer"
        >
          <TelegramIcon sx={iconStyle} />
        </a>
        <a
          href="https://www.instagram.com/o1codingclub/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon sx={iconStyle} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon sx={iconStyle} />
        </a>
      </Stack>
    </div>
  );
};

export default SocialMedia;
