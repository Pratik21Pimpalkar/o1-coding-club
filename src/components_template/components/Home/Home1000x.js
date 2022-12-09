import React from "react";
import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";
import Main1000x from "../TextContent/Main1000x";
import bg_final from "../../images/bg_homepage.png";
import Navbar2 from "../../../components/Navbar";
import styled from "styled-components";
const Home = (prop) => {

  return (
    <>
      <MainWrapper>
        <div className="home">
          <Navbar />
          <Navbar2 />
          <Main1000x name={prop.name} />

          {/* Main content contains Start btn, modal, form */}
          <SocialMedia />
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;

const MainWrapper = styled.div`
  .home {
    height: 100vh;
  }
  @media screen and (max-width: 600px) {
    .home {
      min-height: 100vh; 
    }
  }
  @media screen and (min-device-width:380px) and (max-device-width:900px)  {
    .home{
      height: 80vh !important;
      min-height: initial;
    }
  }
`;
