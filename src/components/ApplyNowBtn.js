import React from "react";
import styled from "styled-components";

const ApplyNowBtn = (props) => {
  return (
    <ApplyNowBtnStyled>
      <a href={props.data.timelineformlink} className="explore-btn ">
        <button className="btn-giveTest mobileres">Apply Now</button>
      </a>
    </ApplyNowBtnStyled>
  );
};

export default ApplyNowBtn;

const ApplyNowBtnStyled = styled.div`
text-align: center;
margin: 0 0 2rem  0;
 transform-origin: 0 0;
/*transform: scale(1.2); */
.btn-giveTest{
  transform: scale(1.2);
}
  @media screen and (max-width: 600px) {
    .mobileres {
      transform: scale(1);
    }
  }
`;
