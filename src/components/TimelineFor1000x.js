import React from "react";
import styled from "styled-components";

const Timeline = (props) => {
  return (
    <TimeLineStyled>
      <h3 className="heading-desktop">How to Apply</h3>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>Join Whatsapp Group</h2>
            <p>
              Join the following Whatsapp group and attend program details
              briefing meet.<br></br>{" "}
              <button className="explore-btn">
                <a href={props.data.timelineformlink} className="explore-btn ">
                  Group Link
                </a>{" "}
              </button>
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Fill Google Form</h2>
            <p>Fill google form circulated in the meet and apply.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Shortlisting Process</h2>
            <p>
              Appear for the shortlisting and selection process, all the best.
            </p>
          </div>
        </div>
      </div>
    </TimeLineStyled>
  );
};

export default Timeline;

const TimeLineStyled = styled.div`
  .heading-desktop {
    margin: 2rem 0;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }
  /* position: re; */
  .explore-btn {
    text-decoration: none;
    font-size: 0.8rem;
    padding: 1px;
    border-radius: 10px;
   
    margin-top: 0.2rem;
    /* margin-left: 0.2rem; */
    transition: all 0.3s;

    color:black;
  }
  .explore-btn :hover {
    /* background-color: #bb4fff; */
    transform:scale(1.1);
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

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
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
