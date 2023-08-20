import React from "react";
import   "./textStyle.css"

function Heading(data) {
  return (
    <>
    {/* {console.log(data)} */}

      <div className="head">
        {/* <h6 className="sidehead">AN O(1) Product</h6> */}
        <p className="heroName">
        <span className="firsthead">{data.name.programName} </span>
       </p>
     
    </div>
    </>
  );
}

export default Heading;


