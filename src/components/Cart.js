/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CART_ITEM, REMOVE_CART_ITEM } from "../redux/Cart/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.operationsCartReducer);
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
        <div className="container-xxl py-6">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 "
              style={{ maxwidth: "500px" }}
            >
              <p className="text-primary text-uppercase mb-2"># Cart</p>
              <h1 className="display-6 mb-4 Playfair">
                View your Cart items here
              </h1>
            </div>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 ">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item) => (
                      <tr>
                        <td>{item.productname}</td>
                        <td>{item.price}</td>
                        <td>
                          <i
                            className="fas fa-trash"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you wish to delete this item?"
                                ) === true
                              ) {
                                dispatch({
                                  type: REMOVE_CART_ITEM,
                                  payload: item.id,
                                });
                              }
                            }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button
              className="form-control btn btn-outline-secondary"
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to Checkout") === true
                ) {
                  dispatch({
                    type: EMPTY_CART_ITEM,
                  });
                }
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
