import React from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import GoogleSignInBtn from "./GoogleSignInBtn";

const SignIn = () => {
  return (
    <div class="each-form">
      <h2>Sign in</h2>
      <div className="signin-form">
        <h4>{/* for name */}Peter</h4>
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
      </div>
      <button className="signin-btn">Sign in</button>
    </div>
  );
};

export default SignIn;
