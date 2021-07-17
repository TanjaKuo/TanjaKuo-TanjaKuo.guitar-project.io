import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import { guitarImg } from "../subData";
//import GuitarList from "./GuitarList";
import guitarData from "./GuitarList";
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

  /* brand match */
  const displayGuitarBrand = (e) => {
    const brandName = e.target.textContent;
    const brand = guitarData.map((each) => each.brand == brandName);
    setShowBrand(brand);

    //console.log(brandName);
  };

  /* const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom }); // {center, bottom} -> {coordinate}
  }; */

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
                <button onClick={displayGuitarBrand}>Yamaha</button>
                <button onClick={displayGuitarBrand}>Fender</button>
              </div>
              <div className="guitar-color">
                <h4>Color</h4>
              </div>
            </div>
          </article>
          <Guitar />
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Products;
