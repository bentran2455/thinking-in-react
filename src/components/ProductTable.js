import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ data, filterInStock, searching }) {
  let filteredArr;
  if (searching) {
    filteredArr = data.filter((product) =>
      product.name.toLowerCase().includes(searching.toLowerCase())
    );
  } else {
    filteredArr = [...data];
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {(filterInStock
          ? filteredArr.filter((product) => product.stocked === true)
          : filteredArr
        ).map((item) => (
          <ProductRow key={item.name} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
