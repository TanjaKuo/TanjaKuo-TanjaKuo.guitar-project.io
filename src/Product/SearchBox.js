import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <>
      <input
        type="search"
        placeholder="search guitar"
        onChange={searchChange}
      />
    </>
  );
};

export default SearchBox;
