// productsData.js
const LOCAL_STORAGE_KEY = "productData";

// Function to get products from localStorage or use a default value
const getProducts = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
};

// Function to save products to localStorage
const saveProducts = (products) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
};

// Function to add a new product
const addProduct = (newProduct) => {
    const products = getProducts();
    newProduct.id = Date.now(); // Assign a unique ID to the new product
    products.push(newProduct);
    saveProducts(products);
};

// Function to edit an existing product
const editProduct = (productId, updatedProduct) => {
    const products = getProducts();
    const index = products.findIndex((product) => product.id === productId);
    if (index !== -1) {
        products[index] = { ...updatedProduct, id: productId };
        saveProducts(products);
    }
};

// Function to delete a product by ID
const deleteProduct = (productId) => {
    const products = getProducts();
    const filteredProducts = products.filter((product) => product.id !== productId);
    saveProducts(filteredProducts);
};

// Function to delete all products
const deleteAllProducts = () => {
    saveProducts([]);
};

export { getProducts, addProduct, editProduct, deleteProduct, deleteAllProducts };
