import React from "react";
import { Container } from "@mui/system";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
      id="faqs"
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", color: "white", fontWeight: "525" }}
      >
        Frequently Asked Questions
      </Typography>
      <br />
      <Box maxWidth={"md"} style={{ margin: "auto" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Program will be online or offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The entire program will be online.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Will the sesion be live or pre-recorded?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The sessions would be live. Also, you will get recordings for
              future reference.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              What will be the timings, duration and frequency of the session?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Timings - 7 PM onwards,
              <br /> Duration - 1 to 1.5 hours,
              <br /> Frequency - 4 times a week
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What if I miss the live class?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Recordings will be provided</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the eligibility criteria?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              2023, 2024 graduates of all branches and degrees are allowed
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What will be the course duration?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>4-6 months</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Are there any pre requisite required for the program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>No pre-requisites</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is the program beginner friendly?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we would start from beginning and build up your skills.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQ;
