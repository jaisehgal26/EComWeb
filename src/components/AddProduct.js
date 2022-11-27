import React, { Suspense } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ADD_ITEM } from "../redux/Products/actions";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    img: "",
    description: "",
    price: "",
    vendor: "",
  };
  const onSubmit = (value, { resetForm }) => {
    const data = {
      id: new Date(),
      productname: value.name,
      img: value.img,
      price: value.price,
      description: value.description,
      vendor: value.vendor,
    };
    dispatch({ type: ADD_ITEM, payload: data });
    navigate("/products");
    resetForm({ value: "" });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    img: Yup.string()
      .matches(/((https?):\/\/)?(www.)?[a-z0-9]?$/, "Enter correct url!")
      .required("Please enter img URL"),
    price: Yup.number("Must be a number")
      .required("Required")
      .positive("Price can't be -ve"),

    vendor: Yup.string().required("Required"),
  });
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
              <p className="text-primary text-uppercase mb-2"># Add Product</p>
              <h1 className="display-6 mb-4 Playfair">
                If You want any other product, Please Add
              </h1>
            </div>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 ">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <label htmlFor="name" className="form-label">
                            Product Name
                          </label>
                          <ErrorMessage name="name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <Field
                            type="text"
                            id="price"
                            name="price"
                            className="form-control"
                          />
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                          <ErrorMessage name="price" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <Field
                            type="text"
                            id="vendor"
                            name="vendor"
                            className="form-control"
                          />
                          <label htmlFor="vendor" className="form-label">
                            Vendor
                          </label>
                          <ErrorMessage name="vendor" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <Field
                            type="text"
                            id="img"
                            name="img"
                            className="form-control"
                          />
                          <label htmlFor="img" className="form-label">
                            Image URL
                          </label>
                          <ErrorMessage name="img" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <Field
                            type="text"
                            id="description"
                            name="description"
                            className="form-control"
                          />
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <ErrorMessage name="description" />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="form-control btn btn-primary rounded-pill py-3 px-5"
                          type="submit"
                        >
                          Add Product
                        </button>
                      </div>
                      <div className="w-100 text-center mt-2">
                        <Link to="/products">Cancel</Link>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
export default AddProduct;
