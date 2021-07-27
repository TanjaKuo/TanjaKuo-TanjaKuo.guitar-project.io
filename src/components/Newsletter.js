import React from "react";

const Newsletter = () => {
  return (
    <React.Fragment>
      <section className="newsletter-container">
        <div>
          <article>
            <h3 className="newsletter-title">
              SIGN UP TO GET THE LATEST ON SALES AND EXCLUSIVE OFFERS!
            </h3>
            <p className="newsletter-text">
              Sales, new releases, monthly deals, limited stock and more …
            </p>
            <input
              className="newsletter-input"
              type="text"
              placeholder="Enter your Email Address ..."
            />
            <button className="newsletter-btn">Sign up</button>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Newsletter;
