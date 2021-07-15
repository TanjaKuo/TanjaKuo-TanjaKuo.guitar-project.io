import React from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

import { faq } from "../subData";

const FAQ = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="faq-info">
            <h2 className="faq-main-title">Frequency Answer Questions</h2>
            {faq.map((info) => {
              const { id, question, answer } = info;
              return (
                <>
                  <div key={id} className="faq">
                    <h4 className="faq-title">{question}</h4>
                    <p>{answer}</p>
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

export default FAQ;
