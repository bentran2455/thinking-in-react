import React from "react";

function SearchBar({
  filterInStock,
  handleFilterInStock,
  searching,
  handleSearching,
}) {
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="Search product"
        value={searching}
        onChange={handleSearching}
      />
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
