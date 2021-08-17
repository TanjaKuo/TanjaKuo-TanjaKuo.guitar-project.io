import React, { useState } from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import GoogleSignInBtn from "./GoogleSignInBtn";

const RegisterForm = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userName, setUserName] = useState("");

  const addName = (e) => {
    setRegisterName(e.target.value);
  };

  const addEmail = (e) => {
    setRegisterEmail(e.target.value);
  };

  const addPassword = (e) => {
    setRegisterPassword(e.target.value);
  };

  const submitRegister = () => {
    fetch("https://mr-guitar.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" }, // because -, so using {} to cover
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
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
      <h2>Register</h2>
      <div className="signin-form">
        <h4>{userName}</h4>
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
          onChange={addName}
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
          onChange={addEmail}
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
          onChange={addPassword}
        />
      </div>
      <button className="signin-btn" onClick={submitRegister}>
        Register
      </button>
      <GoogleSignInBtn />
    </div>
  );
};

export default RegisterForm;
