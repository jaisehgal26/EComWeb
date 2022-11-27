/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { REMOVE_ITEM } from "../redux/Products/actions";
import EditModal from "./EditModal";
import { ADD_CART_ITEM } from "../redux/Cart/actions";

export default function Products() {
  const [editProduct, setEditProduct] = useState({});
  function print(product) {
    setEditProduct(product);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.operationsReducer);
  var productNodes = products.map((product) => (
    <>
      <div
        key={product.id}
        className="col-lg-4 col-md-6 col-sm-12 rounded"
        maxheight={250}
      >
        <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
          <div className="text-center p-4">
            <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
              ${product.price}
            </div>

            <h3 className="mb-3 Playfair">{product.productname}</h3>
            <span className="text-muted">Vendor: {product.vendor}</span>
            <p className="text-muted">Description: {product.description}</p>
          </div>

          <div className="position-relative mt-auto">
            <img
              className="img-fluid"
              style={{ height: "17rem", width: "355rem" }}
              src={product.img}
              alt=""
            />

            <div className="product-overlay">
              <Link
                className="mx-5"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => {
                  print(product);
                }}
              >
                <i className="fas fa-edit text-primary"></i>
              </Link>
              <Link
                className="  bg-transparent mx-5"
                to="#"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you wish to delete this item?"
                    ) === true
                  ) {
                    dispatch({ type: REMOVE_ITEM, payload: product.id });
                  }
                }}
              >
                <i className="fas fa-trash text-primary"></i>
              </Link>
              <Link
                className="  bg-transparent mx-5"
                to="#"
                onClick={() => {
                  alert("Added Successfully");
                  dispatch({ type: ADD_CART_ITEM, payload: product });
                }}
              >
                <i class="bi bi-cart-fill text-primary"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <div
          className="container-xxl bg-light my-6 py-6 pt-0"
          style={{ margin: "12rem auto" }}
        >
          <div
            className="text-center mx-auto mb-5 "
            style={{ maxwidth: " 500px" }}
          >
            <p className="text-primary text-uppercase mb-2">
              # Bakery Products
            </p>
            <h1 className="display-6 mb-4 Playfair">
              Explore The Categories Of Our Bakery Products
            </h1>
          </div>
          <Link
            className="btn btn-outline-secondary form-control my-3"
            to="/products/addproduct"
          >
            Add Product
          </Link>

          <div className="container">
            <div className="row g-4">{productNodes}</div>
          </div>
        </div>
      </Suspense>
      <Footer />
      <EditModal data={editProduct} />
    </>
  );
}
