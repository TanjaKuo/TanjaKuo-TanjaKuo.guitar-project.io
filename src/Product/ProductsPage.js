import React, { useState } from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";

import guitarData from "../datas/guitarData";
import Pagination from "./Pagination";
import Guitar from "./Guitar";

import "./styles/products-style.css";
import Category from "../components/category/Category";

const ProductsPage = () => {
  const { closeSubmenu } = useGlobalContext();
  const [data, setData] = useState(guitarData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const filterBrand = (e) => {
    const guitarBrand = e.target.textContent;
    const brandName = guitarData.filter((guitar) => {
      if (guitarBrand.toLowerCase() === guitar.brand.toLowerCase()) {
        return guitar.brand.toLowerCase() === guitarBrand.toLowerCase();
      }
      return guitar.color.toLowerCase() === guitarBrand.toLowerCase();
    });
    setData(brandName);
  };

  return (
    <React.Fragment>
      <section className="products-page" onMouseOver={closeSubmenu}>
        <div className="product-hero-center guitar-hero">
          <article className="product-hero-info guitar-info">
            <Category onClick={filterBrand} />
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
    </React.Fragment>
  );
};

export default ProductsPage;
