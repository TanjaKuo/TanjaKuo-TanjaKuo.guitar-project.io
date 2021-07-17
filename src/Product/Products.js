import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import { guitarImg } from "../subData";
//import GuitarList from "./GuitarList";
import guitarData from "../guitarData";
import SearchBox from "./SearchBox";
import SingleGuitar from "./SingleGuitar";
import Guitar from "./Guitar";
import Button from "./Button";

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
          <article className="hero-info contact-info">
            <div className="guitar-category">
              <div className="guitar-brand">
                <SearchBox searchChange={onSearchChange} />
                {/*    <input
                  className=""
                  type="search"
                  placeholder="search guitar"
                  onChange={onSearchChange}
                /> */}
                <h4>Brand</h4>

                <button onClick={filter}>Yamaha</button>
                <button onClick={filter}>Fender</button>
              </div>
              <div className="guitar-color">
                <h4>Color</h4>
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
