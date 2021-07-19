import React from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

export const Blog = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <section className="products-page" onMouseOver={closeSubmenu}>
        <div className="blog">
          <article className="hero-info guitar-info"></article>
          <h2>Blog section</h2>
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Blog;
