import React, { Suspense, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useAuth } from "./Auth";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (value, { resetForm }) => {
    try {
      setError("");
      setLoading(true);
      navigate("/");
      auth.login(value.email);
    } catch {
      setError("Failed to Sign In Email or Password is Incorrect");
    }
    setLoading(false);
    resetForm({ value: "" });
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter valid Email").required("Required"),
    password: Yup.string().required("Required"),
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
              <p className="text-primary text-uppercase mb-2"># Login</p>
              <h1 className="display-6 mb-4 Playfair">
                Login here to access other features
              </h1>
              {error && (
                <div className="alert-danger" role="alert">
                  {error}
                </div>
              )}
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
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="btn btn-primary rounded-pill py-3 px-5 mx-3"
                          type="submit"
                          disabled={loading}
                        >
                          Login
                        </button>
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
