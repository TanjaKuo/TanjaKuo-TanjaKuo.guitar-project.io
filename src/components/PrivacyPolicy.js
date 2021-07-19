import React from "react";
import { privacyPolicy } from "../policyData";
import Newsletter from "./Newsletter";
import { useGlobalContext } from "../context";

const PrivatePolicy = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="faq-info">
            <h2 className="faq-main-title">Private Policy</h2>
            {privacyPolicy.map((returnInfo) => {
              const { id, title, des } = returnInfo;
              return (
                <>
                  <div key={id} className="faq">
                    <h4 className="faq-title">{title}</h4>
                    <p>{des}</p>
                  </div>
                </>
              );
            })}
          </article>
        </div>
        <Newsletter />
      </section>
    </>
  );
};

export default PrivatePolicy;
