import React from "react";
import guitarData from "../guitarData";

const SingleGuitar = () => {
  //const [id, name, brand, color, image, price] = props;
  return (
    <>
      <article className="contact-section">
        <div className="guitar-intro-products">
          <h3>hi</h3>
          {/* {guitarData.map((guitar) => {
            const { id, brand, name, color, price, image } = guitar;
            return (
              <div key={id} className="guitar-intro-each">
                <img src={image.url} alt={name} className="guitar-intro-pics" />
                <h4 className="guitar-intro-name">{name}</h4>
                <p className="guitar-intro-brand">{brand}</p>
                <p>${price} AUD</p>
              </div>
            );
          })} */}
        </div>
      </article>
    </>
  );
};

export default SingleGuitar;
