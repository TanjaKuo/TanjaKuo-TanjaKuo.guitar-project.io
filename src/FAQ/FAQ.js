import React from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

import { faq } from "../subData";

const FAQ = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="faq-info">
            <h2 className="faq-main-title">Frequency Answer Questions</h2>
            {faq.map((info) => {
              const { id, question, answer } = info;
              return (
                <React.Fragment>
                  <div key={id} className="faq">
                    <h4 className="faq-title">{question}</h4>
                    <p>{answer}</p>
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

export default FAQ;
