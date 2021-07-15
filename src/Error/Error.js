import React from "react";
import { useGlobalContext } from "../context";

const Error = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info typewriter">
            <h1>404 page</h1>
          </article>
        </div>
      </section>
    </>
  );
};

export default Error;
