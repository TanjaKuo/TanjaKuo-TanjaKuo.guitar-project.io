import React from "react";
import "../styles/filteredButton-style.css";

const brandsOrColors = [
  "Yamaha",
  "Gibson",
  "Fender",
  "Red",
  "Blue",
  "Black",
  "Green",
  "Yellow",
  "Brown",
  "White",
];

const FilteredButton = ({ onClick }) => {
  return (
    <div className="category-btns">
      {brandsOrColors.map((item, i) => (
        <button className="category-btn" key={i} onClick={onClick}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilteredButton;
