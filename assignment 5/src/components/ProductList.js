// src/components/ProductList.js
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import "./ProductList.css";

// Import local images
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      description: "This is product 1",
      image: img1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      description: "This is product 2",
      image: img2,
    },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      <Cart cart={cart} />
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
