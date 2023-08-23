import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function UserSignUp() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div className="loginMain">
        <div className="inputLogin">
          <div className="headLogin">
            <div className="txtLogin">Sign Up!</div>
          </div>

          <div className="inpLogin">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              autoComplete="off"
            />
          </div>

          <div className="inpLogin">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              autoComplete="off"
            />
          </div>

          <div className="inpLogin">
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              autoComplete="off"
            />
          </div>
          <div className="inpLogin">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              autoComplete="off"
            />
          </div>
          <div className="inpLogin">
            <Button variant="contained" className="loginBtn">
              Sign Up
            </Button>
          </div>
          <div className="inpLogin">
            <span>Already have Account?</span>
            <span className="clickhere">
              <Link className="nav-Link active clickhere" to="/">
                Click here!
              </Link>
            </span>
          </div>
        </div>
        <div className="designDiv">
          <div className="alphatxt">Alpha!</div>
        </div>
      </div>
    </>
  );
}
