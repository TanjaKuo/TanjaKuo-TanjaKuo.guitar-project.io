import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import guitarData from "../guitarData";

const Products = () => {
  const { closeSubmenu, showYamaha } = useGlobalContext();
  //const [yamaha, setYamaha] = useState(true);
  const displayGuitarBrand = (e) => {
    const brands = e.target.textContent;
    showYamaha(brands); // {center, bottom} -> {coordinate}
  };

  return (
    <>
      <section className="products-page" onMouseOver={closeSubmenu}>
        <div className="hero-center products">
          <article className="hero-info contact-info">
            <div class="guitar-category">
              <div className="guitar-brand">
                <h4>Brand</h4>
                <button onClick={() => alert("yahama is here")}>Yamaha</button>
                <button>Fender</button>
              </div>
              <div className="guitar-color">
                <h4>Color</h4>
              </div>
            </div>
          </article>
          <article className="contact-section">
            <div className="guitar-intro-products">
              {guitarData.map((guitar) => {
                const { id, brand, name, color, price, image } = guitar;
                return (
                  <div key={id} className="guitar-intro-each">
                    <img
                      src={image.url}
                      alt={name}
                      className="guitar-intro-pics"
                    />
                    <h4 className="guitar-intro-name">{name}</h4>
                    <p className="guitar-intro-brand">{brand}</p>
                    <p>${price} AUD</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
        <div>
          {/*  {guitarData.map((guitar) => {
            const { id, brand, name, color, price, image } = guitar;
            return (
              <div key={id}>
                <h4>{name}</h4>
                <p>{brand}</p>
                <img src={image.url} alt={name} />
                <p>
                  {price}
                  {color}
                </p>
              </div>
            );
          })} */}
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Products;
