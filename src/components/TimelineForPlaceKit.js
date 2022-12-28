import React from "react";
import styled from "styled-components";
import ApplyNowBtn from "./ApplyNowBtn";
const Timeline = (props) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8}"
    });
    element.href = "../Assets/one.csv";
    element.download = "one.csv";
    element.click();
  };
  return (
    <TimeLineStyled>
      <h3 className="heading-desktop">How to Apply</h3>
      {/* <div className="timeline">

        <div className="container left">
          <div className="content">
            <h2>Enroll  </h2>
            <p>
              Enroll in the program by choosing one of the payment option.<br></br>{" "}
              <button className="btn-giveTest mobileres" onClick={downloadTxtFile}>
                <a href={require("../Assets/ISCFORM.pdf")} download={"ISC_FORM"}>ISA Form Download</a>
              </button>

            </p>
          </div>
        </div>


        <div className="container right">
          <div className="content">
            <h2>Pay Fees</h2>
            <p>Do the specified payment to the given UPI id @oksbi.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Fill google form </h2>
            <p>
              Fill google form circulated in the meet & group to apply.
            </p>
          </div>
        </div>
      </div> */}
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2 style={{ marginLeft: 10 }}>Transfer the Fees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
              <p>
                Transfer ₹ 999 to given QR code using any UPI app.<br></br>
              </p>
              <button className="btn-giveTest mobileres" >
                <a href={require("../Assets/QR.pdf")} download={"QR_Code"}>QR Code</a>
              </button>
            </div>
          </div>
        </div>

      {/* <div className="container right">
          <div className="content">
            <h2>Fill Google Form</h2>
            <p>Fill google form circulated in the meet & group to apply.</p>
          </div>
        </div> */}
      <div className="container right">
        <div className="content">
          <h2 style={{ marginLeft: 10 }}>Fill Registration Form</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <p>
              Fill the registration form with screenshot of payment proof.
            </p>
            <a href={props.data.timelineformlink} className="explore-btn " target="_blank">
              <button className="btn-giveTest mobileres" >
                Applcation Form
              </button>
            </a>
          </div></div>
      </div>
    </div>
    </TimeLineStyled >
  );
};

export default Timeline;

const TimeLineStyled = styled.div`

a{
  text-decoration: none;
  color: white;
}
  .heading-desktop {
    margin: 2rem 0;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }

 
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    padding: 1rem;
    background-color: white;
    position: relative;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  .content p {
    font-size: 1rem;
    padding: 0.2rem 0.4rem;
  }
  .content h2 {
    padding: 0.2rem 0.7rem;
    font-size: 1.32rem;
  }
  .btn-giveTest {
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%;
    font-family: "Poppins";
    margin-top: 0.9rem;
    margin-right: 0.6rem;
    text-transform: uppercase;
    height: auto;
    color: white !important;
    transition: all ease 0.5s;
    text-decoration: none;
    white-space: normal;
    width: initial !important;
    text-align: center;
    /* line-height: 35px; */
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgb(103 0 255 / 40%) 0px 10px 60px 0px;
    padding: 4px 26px;
    padding: 4px 14px;
    border-radius: 300px;
    /* filter: brightness(100%); */
    visibility: visible;
    cursor: pointer;}

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    .mobileres{
    transform: scale(0.7);
  }

    /* Place the timelime to the left */

    .timeline::after {
      left: 31px;
    }

    .content p {
      font-size: 0.7rem;
      padding: 0.2rem 0.4rem;
    }
    .content h2 {
      padding: 0.2rem 0.7rem;
      font-size: 1rem;
    }
    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
`;
