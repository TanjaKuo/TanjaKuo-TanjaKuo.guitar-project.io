import React from "react";
import { useGlobalContext } from "../context";

const Product = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info typewriter">
            <h1>Product page</h1>
          </article>
        </div>
      </section>
    </>
  );
};

export default Product;
