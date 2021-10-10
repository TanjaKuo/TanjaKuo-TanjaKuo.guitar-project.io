import React from "react";

import { Link } from "react-router-dom";

import "./products-style.css";

import "./products-style.css";

const Guitar = ({ data, filterGuitar }) => {
  return (
    <React.Fragment>
      <article className="contact-section">
        <div className="guitar-intro-products">
          {data.map((one) => {
            return (
              <React.Fragment>
                <div key={one.id} className="guitar-intro-each">
                  <Link to={`/products/${one.id}`}>
                    <img
                      src={one.image.url}
                      alt={one.name}
                      className="guitar-intro-pics"
                    />
                  </Link>
                  <h4 className="guitar-intro-name">{one.name}</h4>
                  <p className="guitar-intro-price">$ {one.price} AUD</p>
                  <Link to={`/products/${one.id}`}>
                    <button className="guitar-intro-btn">show detail</button>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </article>
    </React.Fragment>
  );
};

export default Guitar;
