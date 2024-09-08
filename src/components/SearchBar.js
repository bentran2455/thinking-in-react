import React, { useState } from "react";

function SearchBar({ filterInStock, handleFilterInStock, handleSearching }) {
  const [internalSearch, setInternalSearch] = useState("");
  function handleInternalSearch(e) {
    setInternalSearch(e.target.value);
  }
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="Search product"
        value={internalSearch}
        onChange={handleInternalSearch}
      />
      <button type="button" onClick={() => handleSearching(internalSearch)}>
        Find product
      </button>
      <input
        type="checkbox"
        id="instock"
        onChange={handleFilterInStock}
        checked={filterInStock}
      />
      <label htmlFor="instock">Only show products in stock</label>
    </form>
  );
}

export default SearchBar;
