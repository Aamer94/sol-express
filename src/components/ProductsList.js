// src/components/ProductsList.js
import React, { useState } from "react";

const ProductsList = ({ products, onEditProduct, onDeleteProduct }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  return (
    <div>
      <h2>Product List</h2>
      <label>
        Filter by Category:
        <select value={categoryFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more categories here */}
        </select>
      </label>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
            <button onClick={() => onEditProduct(product.id)}>Edit</button>
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
