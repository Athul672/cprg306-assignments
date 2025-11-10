import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
      <div>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-sm font-medium text-blue-600">Qty: {quantity}</span>
    </li>
  );
}

export default Item;
