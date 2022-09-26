import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 125) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
    console.log(navbarColor + "color");
  }
  useEffect(() => {
    changeBackground();

    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);

  });

  return (
    
      <Navwrap>
        <nav className={navbarColor ? "navigation scrolled" : "navigation"} style={{ color: "white" }}>
          
          <a href="#" className="brand-name" title="O1 Analysis">
            <img src={logo} width="50" alt="O(1)-logo" className="img-fluid" />
          </a>

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">Stats</a>
              </li>
              <li>
                <a href="/contact"> Our Events</a>
              </li>
              <li>
                <a href="/contact"> Testimonial</a>
              </li>
              <li>
                <a href="/contact"> About</a>
              </li>
            </ul>
          </div>
        </nav>
      </Navwrap>
    
  );
}

const Navwrap = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  .navigation {
   
    z-index: 9999;
    color: white !important;
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    /* position: relative; */
    padding: 0.5rem 0rem;
    background-color: transparent;

    position: fixed;
    top: 0;
  }

  .brand-name {
    text-decoration: none;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .navigation-menu {
    margin-left: auto;
  }

  .navigation-menu ul {
    display: flex;
    padding: 0;
  }
  .navigation-menu li {
    // removes default disc bullet for li tags and applies margin to left & right side
    list-style-type: none;
    margin: 0 1rem;
  }
  .navigation-menu li a {
    // increases the surface area of the anchor tag to span more than just the anchor text
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .hamburger {
    // removes default border on button element
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    // positions the icon to the right and center aligns it vertically
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  }
  .hamburger:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu ul {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu ul {
      // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
      position: absolute;
      top: 60px;
      left: 0;
      // stacks the li tags vertically
      flex-direction: column;
      // makes menu span full height and width
      width: 100%;
      height: calc(100vh);
      background-color: white;
      border-top: 1px solid black;
    }
    .navigation-menu li {
      // centers link text and strips off margin
      text-align: center;
      margin: 0;
    }
    .navigation-menu li a {
      color: black;
      // increases the surface area of the anchor tag to span the full width of the menu
      width: 100%;
      margin: 2rem 0;
      padding: 1.5rem 0;
    }
    .navigation-menu li:hover {
      background-color: #eee;
    }
  }
  @media screen and (max-width: 768px) {
    .navigation-menu ul {
      /* previous styles */
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu.expanded ul {
      display: block;
    }
  }

  .navigation {
    /* How it will look before scrolled */

    /* background-color: transparent !important; */

    /* To give smoote change */
    -webkit-transition: all ease-out 0.5s;
    -moz-transition: all ease-out 0.5s;
    -o-transition: all ease-out 0.5s;
    transition: all ease-out 0.5s;
  }
  .scrolled {
    /* How it will look when scrolled */
    
    background-color: #fff !important;
    li{
      a{
        color:black;
        font-weight: 600; 
      }
    }
  }
`;
