import React from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

const Products = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="products-page" onMouseOver={closeSubmenu}>
        <div className="hero-center products">
          <article className="hero-info contact-info">
            <div class="guitar-category">
              <div className="guitar-brand">
                <h4>Brand</h4>
              </div>
              <div className="guitar-color">
                <h4>Color</h4>
              </div>
            </div>
          </article>
          <article className="contact-section">
            <form className="contact-form">
              <textarea
                rows="15"
                cols="40"
                className="input"
                placeholder="write your question ...."
                required
              />
            </form>
          </article>
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Products;
