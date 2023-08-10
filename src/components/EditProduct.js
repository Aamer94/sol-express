// src/components/EditProduct.js
import React, { useState } from "react";

const EditProduct = ({ product, onEditComplete }) => {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      category,
      price: parseFloat(price),
    };
    onEditComplete(updatedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
