import React, { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./jobfilterdropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const data = ["Remote", "On-site", "Hybrid"];

const Checkbox = ({ label }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  );
};

const JobFilterDropdown = ({ data, dropdownLabel, showSearchBar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [selecteData, setSelecteData] = useState([]);
  const [searchData, setSearchData] = useState(data);

  const searchItem = (query) => {
    console.log(query)
    if (!query) {
      setSearchData(data);
      return;
    }
    query = query.toLowerCase();

    const finalResult = [];
    data.forEach((item) => {
      if (
        item.toLowerCase().indexOf(query) !== -1 ||
        item.includes(query)
      ) {
        finalResult.push(item);
      }
    });
    setSearchData(finalResult);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="JobFilterContainer">
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {dropdownLabel} <ArrowDropDownIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className="JobFilterPopover"
      >
        {showSearchBar ? (<div>
          <input
            type="search"
            onChange={(e) => searchItem(e.target.value)}
            placeholder="Search Technologies"
            className="JobFilterSearchBar"
          />
        </div>):(<></>)}
        
        <div className="jobFilterMenu">
          <FormControl
            component="fieldset"
            value={selecteData}
            onChange={handleChange}
            sx={{ m: 1, width: 120 }}
          >
            {searchData.map((name, i) => (
              <MenuItem key={name} value={name}>
                <Checkbox label={name} />
              </MenuItem>
            ))}
          </FormControl>
        </div>
        <div className="showButtonJobFilter">
          <button className="btn-giveTest btn fullwidthbtn styleInJobFilterButton">
            show
          </button>
        </div>
      </Popover>
    </div>
  );
};

export default JobFilterDropdown;
