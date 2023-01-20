import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../images/login.svg";
import rupee from "../../../Assets/rupee.png";
import styled from "styled-components";
import { textAlign } from "@mui/system";
import IncomeAgreement from "../../../components/PlanAPlanB";
import Banner from "../../../components/Banner";
const FeaturePosition = {
  color: "white",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  // padding: "0.5rem 2rem",
  fontSize: "19px",
  display: 'flex',
  flexDirection: "column",
  marginBottom: "1rem",
};

const FeatureSection = ({ data }) => {
  console.log(data);
  const instructerData = Array.from(data.instructer);
  return (
    <>
      <AboutProgram id="aboutprogram">
        <Container maxWidth="lg" style={FeaturePosition}>
          <div className="section-title ">
            <h2 className="main-heading">
              About the Program
            </h2>
          </div>

          {data.instructer[0].name ? (
            <>
              <h3 className="heading-desktop"> About Instructor</h3>

              {instructerData.map((item, key) => {
                return (
                  <>
                    <Grid
                      key={key}
                      container
                      alignItems={"center"}
                      justifyContent={"center"}
                      rowSpacing={1}
                      columnSpacing={5}
                    >
                      {/* <li className="items">{item}</li> */}
                      <Grid item md={3}>
                        <div className="image">
                          <img
                            src={item.instructerimg ? item.instructerimg : img}
                            alt=""
                            className="instructerimg"
                          /></div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ height: "max-content" }}>
                          <div style={FeatureParagraph}>
                            <h2 className="heading-desktop2">{item.name}</h2>
                            <h3 >{item.desig}</h3>
                            <p>{item.about}</p>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
              <Banner/>

            </>
          ) : (
            <div></div>
          )}
          {data.showpricing ? (
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              wrap={"wrap-reverse"}
            >
              <Grid item xs={12} sm={12} md={12} order={{ md: 2, lg: 1 }}>
                <Box sx={{ height: "max-content" }}>
                  <div style={FeatureParagraph}>
                    <h3 className="price-desktop">Pricing</h3>
                    {(data.programName === "Super40" || data.programName === "PlacePrep 360") ?
                      // <table className="pricing">
                      //   <tr>
                      //     <td>Option A</td>
                      //     <td>₹ 7000 Upfront</td>
                      //   </tr>
                      //   <tr>
                      //     <td>Option B</td>
                      //     <td>₹ 5000 Upfront + ISA*
                      //        {/* <a href={require("../../../Assets/ISCFORM.pdf")} download={"ISC_FORM"} className="DownloadISA"><span> ISA*</span> </a> */}
                      //        </td>
                      //   </tr>
                      // </table>
                      <IncomeAgreement pricedata={data} />
                      : <><h3 className="price-desktop2"><span style={{
                        margin: " 0 1rem 0 0",
                        fontSize: "1.3rem",
                        "-webkit-text-fill-color": "#a2a2a2",
                        textDecoration: "line-through",
                      }}>{data?.cutPricing}</span>{data.pricing} <span style={{ marginLeft: "0.51rem", lineHeight: "50px", fontSize: "16px", fontWeight: "550" }}>{data.programName === "PlaceKit" ? "" : "+ GST"}</span> </h3>
                        <h3 className="limited">{data.programName === "PlaceKit" ? "Course Duration : 5-6 Months" : ""}</h3>
                        <h3 className="limited">{data.programName === "PlaceKit" ? "Offer Expires Soon" : ""}</h3></>
                    }

                  </div>
                </Box>
              </Grid>
              <Grid item md={5} order={{ md: 1, lg: 2 }}>
                <img src={rupee} alt="" className="rupeeimg" />
              </Grid>
            </Grid>
          ) : (
            <div></div>
          )}
        </Container>
      </AboutProgram>
    </>
  );
};

export default FeatureSection;

const AboutProgram = styled.div`
.limited{
  margin-top: 1.1rem;
    font-size: 1.3rem;
    -webkit-text-fill-color: #cfaecf;
    text-align: center;
}
  .section-title {
    text-align: center;
  }
  .DownloadISA{
    color: #ad85ff;
    -webkit-text-fill-color: initial;
    text-decoration: underline;
  }
  .main-heading{
    font-size :3.2rem;
    margin-bottom: 2rem;
  }

  .heading-desktop {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .heading-desktop2 {
    -webkit-text-fill-color: initial;
    color: #9874ff;
    font-size: 1.7rem;
  }

  .price-desktop {
    font-size: 2.8rem;
    text-align: center;
  }
  .price-desktop2 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .pricing{
    text-align: center;
    margin-top: 1.5rem;
    border:4px double #c930ff;
    td{
      -webkit-text-fill-color: #3902cd;
      background:#e6ddff;
      border-radius: 0.1rem;
      border:white 1px solid;
      
     font-size: 1.35rem;
      padding:0.5rem 0.32rem;
      margin: 0.5rem 1rem;
    }
  }
  .instructerimg {
    width: 16rem;
    /* margin-left: 5rem; */
    border-radius: 1rem;
    border: 4px double #9874ff;
    margin: 0 auto;
      height: 15rem;
    
    object-fit: cover;
    @media screen and (max-width: 400px) {
      width: 12rem;
    }
  }
  .rupeeimg {
    width: 25rem;
  }

    @media screen and (max-width: 576px) {
    .main-heading{
    
    font-size: 2.2rem;
  }
  .heading-desktop{
    font-size: 2rem;
  }
  .heading-desktop2{
    text-align:center;
  }
  } 

`;
