import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import JobCandidateinfo from "./JobCandidateinfo";

const Register = ({ open, handleClose }) => {
  let navigate = useNavigate();

  const [tokenAfterLogin, setTokenAfterLogin] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isDataPresent, setIsDataPresent] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    college: "",
    branch: "",
    graduationYear: "",
    skills: "",
    experience: "",
    education: "",
    currentCompamy: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(11, 0, 26)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "Space-Evenly",
    alignItems: "Center",
    color: "#fff",
    flexDirection: "column",
    height: "300px",
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(11, 0, 26)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "#fff",
    padding: "30px",
    marginBottom: "30px",
    height: "100%",
    overflowY: "auto",
  };

  const googlebuttonstyle = {
    width: "50px",
    height: "50px",
    border: "1px solid #fff",
    borderRadius: "50%",
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setTokenAfterLogin(token);
        const user = result.user;
        setIsLogedIn(true);
        console.log(credential, user, token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });

  return (
    <>
      {isLogedIn ? (
        <div>
          {isDataPresent ? (
            <div></div>
          ) : (
            <div>
              <Modal
                sx={{ overflowY: "scroll" }}
                keepMounted
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleClose}
              >
                <Box style={style1} className="JobStudentLoginModal">
                  <h4>Please Fill The Details</h4>
                  <JobCandidateinfo />
                </Box>
              </Modal>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Modal
            sx={{ overflowY: "auto" }}
            keepMounted
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
          >
            <Box style={style} className="JobStudentLoginModal">
              <h4>Sign in with Google...</h4>
              {/* <button onClick={signInWithGoogle}>Google</button> */}
              <IconButton
                style={googlebuttonstyle}
                onClick={signInWithGoogle}
                aria-label="SignIn"
                size="large"
              >
                <GoogleIcon style={{ color: "#4285F4" }} fontSize="inherit" />
              </IconButton>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Register;
