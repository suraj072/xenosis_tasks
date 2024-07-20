// src/App.js
import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Product Page</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
