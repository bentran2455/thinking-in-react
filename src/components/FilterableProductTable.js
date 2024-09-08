import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ data }) {
  const [filterInStock, setFilterInStock] = useState(false);
  function handleFilterInStock() {
    setFilterInStock(!filterInStock);
    if (filterInStock) {
      console.log("checked");
    }
  }
  const [searching, setSearching] = useState("");
  function handleSearching(e) {
    setSearching(e);
    console.log(e);
  }

  useEffect(() => {
    console.log("Hello");
  }, [filterInStock, searching]);
  return (
    <div>
      <SearchBar
        filterInStock={filterInStock}
        handleFilterInStock={handleFilterInStock}
        handleSearching={handleSearching}
      />
      {filterInStock ? <p>Checked</p> : null}
      <ProductTable
        data={data}
        filterInStock={filterInStock}
        searching={searching}
      />
    </div>
  );
}

export default FilterableProductTable;
