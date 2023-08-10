// src/App.js
import React, { useState } from "react";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import { getProducts, addProduct, editProduct, deleteProduct, deleteAllProducts } from "./productsData";
import SaveDataToFile from "./SaveDataToFile";

function App() {
  const [products, setProducts] = useState(getProducts());
  const [editingProduct, setEditingProduct] = useState(null); // State to track the editing product

  const handleAddProduct = (newProduct) => {
    addProduct(newProduct);
    setProducts(getProducts());
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditingProduct(productToEdit);
  };

  const handleEditComplete = (updatedProduct) => {
    editProduct(updatedProduct.id, updatedProduct);
    setEditingProduct(null);
    setProducts(getProducts());
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
    setProducts(getProducts());
  };

  const handleDeleteAllProducts = () => {
    deleteAllProducts();
    setProducts(getProducts());
  };

  return (
    <div>
      <h1>Product Management App</h1>
      <ProductsList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
      <AddProduct onAddProduct={handleAddProduct} />
      {editingProduct && <EditProduct product={editingProduct} onEditComplete={handleEditComplete} />}
      <DeleteProduct onDeleteAllProducts={handleDeleteAllProducts} />
      <SaveDataToFile></SaveDataToFile>
    </div>
  );
}

export default App;
