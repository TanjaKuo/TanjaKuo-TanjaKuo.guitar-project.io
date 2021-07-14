import React from "react";
import { faq } from "../subData";

const FAQ = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-center">
          <article className="faq-info">
            {faq.map((info) => {
              const { id, question, answer } = info;
              return (
                <div key={id}>
                  <h4>{question}</h4>
                  <p>{answer}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default FAQ;
