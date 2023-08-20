import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function UserLogin() {
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
            <div className="txtLogin">Login!</div>
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
              Login
            </Button>
          </div>
          <div className="inpLogin">
            <span>Create an Account?</span>
            <span className="clickhere">Click here!</span>
          </div>
        </div>
        <div className="designDiv">
          <div className="alphatxt">Alpha!</div>
        </div>
      </div>
    </>
  );
}
