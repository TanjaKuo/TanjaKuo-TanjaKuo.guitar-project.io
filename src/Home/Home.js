import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";
import hero from "../image/hero3.png";
// Components
import Banner from "./Banner";
import GuitarItem from "./GuitarItem";
import Post from "./Post";
const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info typewriter">
            <h1>best guitar ever</h1>{" "}
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <Link to="./products">
              <button className="buy-btn">Buy one now</button>{" "}
            </Link>
          </article>
          <article className="hero-images stand-up">
            <img src={hero} alt="hero" />
          </article>
        </div>
      </section>
      <div className="tempbanner">
        <Banner />
      </div>
      <div className="guitar-section">
        <div className="guitar">
          <GuitarItem />
        </div>
      </div>
      <section className="post-section" /* onScroll={scrollY} */>
        <Post />
      </section>
    </>
  );
};

export default Home;
