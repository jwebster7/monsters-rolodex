// import React, { useState } from "react";
import React from "react";

import './Search.css';

const Search = ({ placeHolder, handleSearchInput }) => {
  return (
    <input
      className='search-box'
      type="search"
      placeholder={placeHolder}
      onChange={handleSearchInput}
    />
  );
};

export default Search;
