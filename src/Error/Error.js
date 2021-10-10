import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import hero from "../image/hero3.png";
import Newsletter from "../components/Newsletter";

import "./error-style.css";

const Error = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>Constructing ....</h1>
            <Link to="./">
              <button className="btn">Go Home Page</button>
            </Link>
          </article>
          <article className="hero-images stand-up">
            <img src={hero} alt="hero" />
          </article>
        </div>
      </section>
      <br />
      <Newsletter />
    </React.Fragment>
  );
};

export default Error;
