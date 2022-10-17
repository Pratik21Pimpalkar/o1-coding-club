import React from "react";
import Heading from "./Heading";
import Circle from "../Circle";
import List from "./List";
import "./textStyle.css";
import ModalForm from "../Modal/Modal";
import { Container, Grid } from "@mui/material";


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
            <ModalForm />
          </Grid>
          <Grid item md={4} sm={5} xs={6}>
            <Circle />
          </Grid>
        </Grid>
      </Container>
  );
}

export default Main;
