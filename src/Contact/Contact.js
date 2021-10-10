import React from "react";
import { useGlobalContext } from "../context";
import Newsletter from "../components/Newsletter";

import "./contact-style.css";

const Contact = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="contact-page" onMouseOver={closeSubmenu}>
        <div className="hero-center contact">
          <article className="hero-info contact-info">
            <h1>contact Us</h1>
            <h4 className="number">ph: 0423235600</h4>
            <p>Email: harro@mr-guitar@gmail.com</p>
          </article>
          <article className="contact-section">
            <form className="contact-form">
              <label for="fname">First name:</label>
              <input type="text" className="input" name="fname" required />
              <label for="email">Email:</label>
              <input type="text" className="input" name="email" required />
              <label for="cars">Choose your question:</label>
              <select name="question" id="question" className="input">
                <optgroup label="Service">
                  <option value="shipping issue">Shipping Issue</option>
                  <option value="refund issue">Refund Issue</option>
                </optgroup>
                <optgroup label="Guitar Enquire">
                  <option value="brand">Brand</option>
                  <option value="guiar-fix">Guitar Fix</option>
                </optgroup>
              </select>
              <textarea
                rows="15"
                cols="40"
                className="input"
                placeholder="write your question ...."
                required
              />

              <input type="submit" value="Submit" className="contact-btn" />
            </form>
          </article>
        </div>
      </section>
      <Newsletter className="new" />
    </React.Fragment>
  );
};
export default Contact;
