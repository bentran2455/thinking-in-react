import React from "react";

function ProductRow({ item }) {
  return (
    <tr key={item.name}>
      <td className="product-name" style={{ color: item.stocked ? "" : "red" }}>
        {item.name}
      </td>
      <td className="product-price">{item.price}</td>
    </tr>
  );
}

export default ProductRow;

// const uniqueCategory = useRef([
//   ...new Set(data.map((item) => item.category)),
// ]);

// <tr>
//       {uniqueCategory.current.map((category) => (
//         <th key={category}>{category}</th>
//       ))}
//     </tr>
