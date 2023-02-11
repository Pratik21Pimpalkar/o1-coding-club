import React from "react";
import styled from "styled-components";
import laptopImg from "../images/laptop_for_webpage.png";

const Circle = () => {
  return (
    <CircleStyle className="inside-circle">
      <img src={laptopImg} alt="" className="laptopimg" />
    </CircleStyle>
  );
};

export default Circle;

const CircleStyle = styled.div`
  /* position: relative;
  right: 8.3rem; */
  height: 34rem;
  width: 34rem;
  background: rgba(0, 0, 0, 0)
    linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat
    scroll 0% 0%;
  transform: perspective(600px);
  box-shadow: rgba(103, 0, 255, 0.4) 0px 10px 60px 0px;
  border-radius: 50%;
  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
    animation: MoveUpDown 1s linear infinite;
  }

  @media screen and (max-width: 600px) {
    /* transform: scale(0.5) !important; */
    right: 10rem;
    animation: none;
    
  }
  @media screen and (min-device-width:380px) and (max-device-width:900px)  {
    
  }

  @keyframes MoveUpDown {
    0% ,100%{
transform: translateY(0)

    }
    50%{
      transform: translateY(-5px);
 
    }
    
  }
  &:hover {
    transform: scale(1.01);
    transition: 0.9s all ease-in-out;
  }
  @media screen and (max-width: 900px) {
    animation: none;
    transform: scale(0.8) !important;
  }
  @media screen and (max-width: 600px) {
    animation: none;
    /* margin-top: 5rem; */
    transform: scale(0.5) !important;
    right: 10rem;
  }

  @media screen and (max-width: 400px) {
    transform: scale(0.5) !important;
    right: 10rem;
    animation: none;
  }
`;
