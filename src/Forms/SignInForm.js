import React, { useState } from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import GoogleSignInBtn from "./GoogleSignInBtn";
import { data } from "../subData";

const SignIn = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [userName, setUserName] = useState("");

  const changeEmail = (e) => {
    setSigninEmail(e.target.value);
  };

  const changePassword = (e) => {
    setSigninPassword(e.target.value);
  };

  const submitSignin = () => {
    fetch("https://mr-guitar.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" }, // because -, so using {} to cover
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.name);
        console.log("welcome back", data.name);
      })
      .catch((err) => console.log("oh oh"));
  };

  return (
    <div className="each-form">
      <h2>Sign in</h2>
      <div className="signin-form">
        <h4>welcome back {userName}</h4>
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
          onChange={changeEmail}
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
          onChange={changePassword}
        />
      </div>
      <button className="signin-btn" onClick={submitSignin}>
        Sign in
      </button>
    </div>
  );
};

export default SignIn;
