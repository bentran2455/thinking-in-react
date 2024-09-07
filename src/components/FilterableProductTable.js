import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ data }) {
  const [filterInStock, setFilterInStock] = useState(false);
  function handleFilterInStock() {
    setFilterInStock(!filterInStock);
  }
  const [searching, setSearching] = useState("");
  function handleSearching(e) {
    setSearching(e.target.value);
  }

  return (
    <div>
      <SearchBar
        filterInStock={filterInStock}
        handleFilterInStock={handleFilterInStock}
        searching={searching}
        handleSearching={handleSearching}
      />
      <ProductTable
        data={data}
        filterInStock={filterInStock}
        searching={searching}
      />
    </div>
  );
}

export default FilterableProductTable;
