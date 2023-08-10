// src/components/DeleteProduct.js
import React from "react";

const DeleteProduct = ({ onDeleteAllProducts }) => {
  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete all products?</p>
      <button onClick={onDeleteAllProducts}>Delete All Products</button>
    </div>
  );
};

export default DeleteProduct;
