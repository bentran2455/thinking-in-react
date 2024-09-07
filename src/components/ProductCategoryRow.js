import React, { useRef } from "react";

function ProductCategoryRow({ data }) {
  const result = useRef([...new Set(data.map((item) => item.category))]);
  return (
    <tbody>
      <tr>
        {result.current.map((category) => (
          <th key={category}>{category}</th>
        ))}
      </tr>
    </tbody>
  );
}

export default ProductCategoryRow;
