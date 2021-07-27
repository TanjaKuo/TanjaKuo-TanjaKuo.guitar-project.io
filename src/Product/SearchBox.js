import React from "react";

const SearchBox = ({ searchGuitar }) => {
  return (
    <React.Fragment>
      <input
        type="search"
        placeholder="search guitar"
        onChange={searchGuitar}
        className="search-box"
      />
    </React.Fragment>
  );
};

export default SearchBox;
