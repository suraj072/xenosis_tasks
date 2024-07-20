// src/components/Cart.js
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Items in Cart: {cart.length}</p>
    </div>
  );
};

export default Cart;
