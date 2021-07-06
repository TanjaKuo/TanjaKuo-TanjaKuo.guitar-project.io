import React from "react";
import { useGlobalContext } from "../context";
import hero from "../image/hero3.png";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info typewriter">
          <h1>best guitar ever</h1>{" "}
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="buy-btn">Buy one now</button>{" "}
        </article>
        <article className="hero-images">
          <img src={hero} alt="hero" />
        </article>
      </div>
    </section>
  );
};

export default Home;
