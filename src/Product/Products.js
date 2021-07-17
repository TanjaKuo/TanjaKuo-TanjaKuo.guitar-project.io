import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import { guitarImg } from "../subData";
//import GuitarList from "./GuitarList";
import guitarData from "../guitarData";
import SearchBox from "./SearchBox";
import SingleGuitar from "./SingleGuitar";
import Guitar from "./Guitar";

const Products = () => {
  const { closeSubmenu, showYamaha, openGuitar, openBrand } =
    useGlobalContext();
  const [searchField, setsetSearchField] = useState("");
  const [showBrand, setShowBrand] = useState({
    id: "",
    brand: "",
    color: "",
    price: "",
    name: "",
    image: {},
  });

  const [data, setData] = useState(guitarData);
  const [buttons, setButtons] = useState([]);
  /* brand match */
  const filter = (e) => {
    const guitarBrand = e.target.textContent;
    const brandName = guitarData.filter(
      (e) => e.brand.toLowerCase() === guitarBrand.toLowerCase()
    );
    setData(brandName); // super important ****** without it, will not run
  };

  const onSearchChange = (e) => {
    setsetSearchField(e.target.value);
    console.log(onSearchChange);
  };

  return (
    <>
      <section className="products-page" onMouseOver={closeSubmenu}>
        <div className="hero-center products">
          <article className="hero-info guitar-info">
            <div className="guitar-category">
              <div className="guitar-brand">
                <SearchBox searchChange={onSearchChange} />
                <h4 className="category">Brand</h4>
                <div className="category-btns">
                  <button className="category-btn" onClick={filter}>
                    Yamaha
                  </button>
                  <button className="category-btn" onClick={filter}>
                    Fender
                  </button>
                  <button className="category-btn" onClick={filter}>
                    Gibson
                  </button>
                  <br />
                  <h4 className="category">Color</h4>
                  <div className="category-btns">
                    <button className="category-btn" onClick={filter}>
                      Yamaha
                    </button>
                    <button className="category-btn" onClick={filter}>
                      Fender
                    </button>
                    <button className="category-btn" onClick={filter}>
                      Gibson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <Guitar data={data} />
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Products;
