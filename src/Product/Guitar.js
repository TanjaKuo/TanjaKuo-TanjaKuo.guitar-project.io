import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import guitarData from "../guitarData";

const Guitar = ({ data }) => {
  /*   const {
    isShowBrand,
    showBrand: { brand, image, name, id, price, color },
  } = useGlobalContext();
 */
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
                  <p className="guitar-intro-brand">{one.brand}</p>
                  <p>${one.price} AUD</p>
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

{
  /*  <article className="contact-section">
        <div className="guitar-intro-products">
          <div key={id} className="guitar-intro-each">
                         <img src={image.url} alt={name} className="guitar-intro-pics" />
            
            <h4 className="guitar-intro-name">{name}</h4>
            <p className="guitar-intro-brand">{brand}</p>
            <p>${price} AUD</p>
</div> */
}
