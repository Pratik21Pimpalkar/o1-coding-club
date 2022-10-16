import React from "react";
import "./textStyle.css";
import { Typography } from "@mui/material";
function List(prop) {
  const s = "Not just a coding platform, but a complete placement ecosystem with strong  emphasis on high quality placement training & support, not only equipping  you with relevant job market skills but providing every help to land your  dream job.";
  return (

    <Typography className="para">
   {prop.desc.desc? prop.desc.desc : s}   
    </Typography>

  );
}

export default List;

