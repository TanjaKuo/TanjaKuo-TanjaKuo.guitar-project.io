import React from "react";
import { useGlobalContext } from "../context";

const ShopCartPage = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <article className="faq-info">
          <h2 className="faq-main-title">shopcart page</h2>
        </article>
      </section>
    </React.Fragment>
  );
};

export default ShopCartPage;
