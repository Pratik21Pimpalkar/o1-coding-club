import React from "react";
import Heading from "./Heading";
import Circle from "../Circle";
import List from "./List";
import "./textStyle.css";
import ModalForm from "../Modal/Modal";
import { Container, Grid } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

function Main(prop) {
  const styles = (theme) => ({
    root: {
      backgroundColor: "blue",
      // Match [sm, md)
      //       [600px, 900px)
      [theme.breakpoints.between("sm", "md")]: {
        backgroundColor: "red",
      },
    },
  });
  return (
    <Main1000xWrapper>
      <Container maxWidth={"lg"} className="content">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          wrap={"wrap-reverse"}
        >
          <Grid item md={8} sm={7} xs={12} style={{ zIndex: "1" }}>
            <Heading name={prop.name} />
            <List desc={prop.name} />
            {/* <ModalForm /> */}
            {prop.name.linktoregister ? (
              <div className="btn-container">
                <HashLink
                  smooth
                  to={prop.name?.applyNowURL}
                  className="brand-name"
                  title="O1 Analysis"
                >
                  <button className="btn-giveTest btn-giveTest-responsive">{prop.name.programName==="PlaceKit"?"Enroll" : "Apply"}</button>{" "}
                </HashLink>
              </div>
            ) : null}
          </Grid>
          <Grid item md={4} sm={5} xs={6} className="circle">
            <Circle className="circleComponent" />
          </Grid>
        </Grid>
      </Container>
    </Main1000xWrapper>
  );
}

export default Main;

const Main1000xWrapper = styled.div`
  @media screen and (max-width: 600px) {
    .circleComponent {
      margin-top: 5rem;
    }
  }
  @media screen and (min-device-width: 380px) and (max-device-width: 900px) {
    .circleComponent {
      margin-top: 50rem;
    }
  }
`;
