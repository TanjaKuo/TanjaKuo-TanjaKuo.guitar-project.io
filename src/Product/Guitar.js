/* import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import guitarData from "../guitarData";

const Guitar = ({ data }) => {

  return (
    <>
      <article className="contact-section">
        <div className="guitar-intro-products">
          {data.map((one) => {
            return (
              <>
                <div key={one.id} className="guitar-intro-each">
                  <img
                    src={one.image.url}
                    alt={one.name}
                    className="guitar-intro-pics"
                  />
                  <h4 className="guitar-intro-name">{one.name}</h4>
                  <p className="guitar-intro-price">$ {one.price} AUD</p>
                </div>
              </>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Guitar;

 */

import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import guitarData from "../guitarData";

const Guitar = ({ data }) => {
  return (
    <>
      <article className="contact-section">
        <div className="guitar-intro-products">
          {data.map((one) => {
            return (
              <>
                <div key={one.id} className="guitar-intro-each">
                  <img
                    src={one.image.url}
                    alt={one.name}
                    className="guitar-intro-pics"
                  />
                  <h4 className="guitar-intro-name">{one.name}</h4>
                  <p className="guitar-intro-price">$ {one.price} AUD</p>
                </div>
              </>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Guitar;
