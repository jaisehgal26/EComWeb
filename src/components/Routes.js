import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Login from "./Login";
import Cart from "./Cart";

import Products from "./Products";
import AddProduct from "./AddProduct.js";

export default function Rutes() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/addproduct" element={<AddProduct />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
