import { Container } from "@mui/system";
import React from "react";
import all_offers from "../Assets/all_offers.jpeg";

const AllOffers = () => {
  return (
    <Container>
      <img src={all_offers} alt="offer" style={{ width: "100%" }} />
    </Container>
  );
};

export default AllOffers;
