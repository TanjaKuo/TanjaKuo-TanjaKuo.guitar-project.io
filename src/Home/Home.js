import React from "react";
import { useGlobalContext } from "../context";
import hero from "../image/hero3.png";
// Components
import Banner from "../components/Banner";
import GuitarItem from "../components/GuitarItem";
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
            <button className="buy-btn">Buy one now</button>{" "}
          </article>
          <article className="hero-images">
            <img src={hero} alt="hero" />
          </article>
        </div>
      </section>
      <div class="tempbanner">
        <Banner />
      </div>
      <div className="guitar-section">
        <div class="guitar">
          <GuitarItem />
        </div>
      </div>
      {/*  <section className="hero">
        <div className="ul"></div>
      </section> */}
    </>
  );
};

export default Home;
