import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
const ApplyNowBtn = (props) => {
  return (
    <ApplyNowBtnStyled>
      <HashLink
        smooth
        to={props.data.applyNowURL}


      >
        {props.data.shownote ?
          <p style={{ color: '#9874ff', fontWeight: 'bold', fontSize: '20px' }}>Note : The program is free if we fail to land you minimum of 7LPA job. 100% refund, no questions asked.</p> : <div></div>}
        <button className="btn-giveTest mobileres explore-btn" style={{ marginTop: '30px' }}>Apply Now</button>
      </HashLink>
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
