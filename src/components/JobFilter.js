import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import JobFilterDropdown from "./JobFilterDropdown";

const Type = ["Remote", "Onsite", "Hybrid"];
const Cities = [
  "Pune",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Vadodara",
  "Jaipur",
];
const Companies = [
  "Pune",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Vadodara",
  "Jaipur",
];
const ExprienceLevel = [
  "Internship",
  "Entry level",
  "Associate",
  "Mid-Senior level",
  "Director",
  "Executive",
];

const JobFilter = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(false);

  const handleChangeJobType = (event) => {
    setSelectedItem(event.target.value);
  };

  const changeBackground = () => {
    if (window.scrollY >= 125) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Navwrap>
      <div className={backgroundColor ? "filter filter-scrolled" : "filter"}>
        <div>
          <FormControl
            className="selectFormMenu"
            sx={{ color: "e5e5e5", m: 1, minWidth: 120 }}
          >
            <Select
              value={selectedItem}
              onChange={handleChangeJobType}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ color: "e5e5e5 !important" }}
            >
              <MenuItem value="">
                <em>Job</em>
              </MenuItem>
              <MenuItem value={10}>Internship</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="JobType">
          <JobFilterDropdown dropdownLabel={"Type"} data={Type} />
          <JobFilterDropdown
            dropdownLabel={"Exprience Level"}
            data={ExprienceLevel}
          />
          <JobFilterDropdown
            showSearchBar
            dropdownLabel={"Cities"}
            data={Cities}
          />
          <JobFilterDropdown
            showSearchBar
            dropdownLabel={"Companies"}
            data={Companies}
          />
        </div>
      </div>
    </Navwrap>
  );
};

const Navwrap = styled.div`
  .filter {
    color: #e5e5e5;
    width: 100%;
    border: 1px solid rgba(132, 132, 132, 0.6);
    border-right: none;
    border-left: none;
    position: fixed;
    top: 5rem;
    z-index: 999;
    transition: all ease-out 0.5s;
    display: flex;
  }

  .filter-scrolled {
    background-color: #fff !important;
    color: black;
    font-weight: 600;
    div {
      color: black;

      div {
        div {
          svg {
            color: #000;
          }
        }
      }

      svg {
        color: #000;
      }
    }
    .JobType > .JobFilterContainer > button {
      border: 1px solid #000;
      color: #000;
    }
    .JobType > .JobFilterContainer > button:hover {
      /* background-color: transparent; */
      background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%;
    }
    .selectFormMenu > div {
      border: 1px solid #000;
    }
  }

  .selectFormMenu {
    min-width: 120px;
    margin-right: 30px;
    margin-left: 75px;
  }

  .selectFormMenu > div {
    color: #e5e5e5;
    border: 1px solid #fff;
    border-radius: 50px;
  }

  .selectFormMenu > div > div {
    padding: 6px 16px;
  }

  .selectFormMenu > div > svg {
    color: #e5e5e5;
  }

  .JobType {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export default JobFilter;
