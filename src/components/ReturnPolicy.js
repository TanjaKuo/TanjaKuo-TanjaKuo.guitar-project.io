import React from "react";
import { returnPolicy } from "../datas/policyData";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

const ReturnPolicy = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="faq-info">
            <h2 className="faq-main-title">Return Policy</h2>
            {returnPolicy.map((returnInfo) => {
              const { id, title, des } = returnInfo;
              return (
                <React.Fragment>
                  <div key={id} className="faq">
                    <h4 className="faq-title">{title}</h4>
                    <p>{des}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </article>
        </div>
        <Newsletter />
      </section>
    </React.Fragment>
  );
};

export default ReturnPolicy;
