import React from "react";

const SearchBox = ({ searchGuitar }) => {
  return (
    <>
      <input
        type="search"
        placeholder="search guitar"
        onChange={searchGuitar}
        className="search-box"
      />
    </>
  );
};

export default SearchBox;
