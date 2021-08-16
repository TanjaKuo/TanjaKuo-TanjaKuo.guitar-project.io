import React from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import GoogleSignInBtn from "./GoogleSignInBtn";

const RegisterForm = () => {
  return (
    <div class="each-form">
      <h2>Register</h2>
      <div className="signin-form">
        <TextField
          className="form"
          id="standard-full-width"
          label="Full Name"
          fullWidth
          style={{ margin: 8 }}
          placeholder="John Doe"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="abc@gmail.com"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          placeholder="****"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <button className="signin-btn">Register</button>
      <GoogleSignInBtn />
    </div>
  );
};

export default RegisterForm;
