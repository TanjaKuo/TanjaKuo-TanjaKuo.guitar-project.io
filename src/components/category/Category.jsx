import React from "react";
import FilteredButton from "./FilteredButton";

import "../styles/category-style.css";

const Category = ({ onClick }) => {
  return (
    <div className="guitar-category">
      <div className="guitar-brand">
        <h4 className="category">Category</h4>
        <FilteredButton onClick={onClick} />
      </div>
    </div>
  );
};

export default Category;
