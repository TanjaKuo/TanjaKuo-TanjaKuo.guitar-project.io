/* import React, { useState } from "react";
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
  console.log(data);
  
  // brand match 
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
 */

import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import { guitarImg } from "../subData";
//import GuitarList from "./GuitarList";
import guitarData from "../guitarData";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";
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
  /* ************************* */
  const [data, setData] = useState(guitarData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  /* ************************* */

  const [buttons, setButtons] = useState([]);
  console.log(data);
  /* brand match */
  const filterBrand = (e) => {
    const guitarBrand = e.target.textContent;
    const brandName = guitarData.filter(
      (e) => e.brand.toLowerCase() === guitarBrand.toLowerCase()
    );
    setData(brandName); // super important ****** without it, will not run
  };
  /* color match */
  const filterColor = (e) => {
    const guitarBrand = e.target.textContent;
    const brandName = guitarData.filter(
      (e) => e.color.toLowerCase() === guitarBrand.toLowerCase()
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
                  <button className="category-btn" onClick={filterBrand}>
                    Yamaha
                  </button>
                  <button className="category-btn" onClick={filterBrand}>
                    Fender
                  </button>
                  <button className="category-btn" onClick={filterBrand}>
                    Gibson
                  </button>
                  <br />
                  <h4 className="category">Color</h4>
                  <div className="category-btns-color">
                    <button
                      className="category-btn-color"
                      onClick={filterColor}
                    >
                      Red
                    </button>
                    <button
                      className="category-btn-color "
                      onClick={filterColor}
                    >
                      Black
                    </button>
                    <button
                      className="category-btn-color"
                      onClick={filterColor}
                    >
                      Green
                    </button>
                    <button
                      className="category-btn-color"
                      onClick={filterColor}
                    >
                      Yellow
                    </button>
                    <button
                      className="category-btn-color"
                      onClick={filterColor}
                    >
                      Brown
                    </button>
                    <button
                      className="category-btn-color"
                      onClick={filterColor}
                    >
                      White
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <Guitar data={currentPost} />
        </div>
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </section>
      <Newsletter className="new" />
    </>
  );
};

export default Products;
