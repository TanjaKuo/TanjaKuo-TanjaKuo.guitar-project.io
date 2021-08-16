import React from "react";
import "./signin.css";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

const Forms = () => {
  return (
    <section className="faq-hero">
      <div className="root">
        <SignInForm />
        <RegisterForm />
      </div>
    </section>
  );
};

export default Forms;
