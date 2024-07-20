// src/App.js
import React from "react";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Contact Form</h1>
      </header>
      <ContactForm />
    </div>
  );
}

export default App;
