import React from "react";
import { Link } from "react-router-dom";

const TestingGuitar = ({ data }) => {
  return (
    <React.Fragment>
      <article className="contact-section">
        <div className="guitar-intro-products">
          {data.map((one) => {
            return (
              <React.Fragment>
                <div key={one.id} className="guitar-intro-each">
                  <img
                    src={one.image.url}
                    alt={one.name}
                    className="guitar-intro-pics"
                  />
                  <h4 className="guitar-intro-name">{one.name}</h4>
                  <p className="guitar-intro-price">$ {one.price} AUD</p>
                  <Link to={`/products/${one.id}`}>more</Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </article>
    </React.Fragment>
  );
};

export default TestingGuitar;
