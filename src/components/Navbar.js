import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Navbar() {
  const auth = useAuth();
  return (
    <>
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg  py-lg-0 px-lg-5 fadeIn">
        <div className="container-fluid ">
          <Link className="navbar-brand nav-link selected" to="/">
            Bakingo
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/">
                  Home
                </Link>
              </li>

              {auth.user && (
                <li className="nav-item">
                  <Link className="navbar-brand nav-link" to="/products">
                    Products
                  </Link>
                </li>
              )}
            </ul>

            <div>
              <div className=" d-none d-lg-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  {!auth.user && (
                    <li className="nav-item">
                      <Link className="navbar-brand nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                  {auth.user && (
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link navbar-brand dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth.user}
                      </Link>
                      <ul class="dropdown-menu">
                        <li>
                          <Link
                            class="dropdown-item"
                            href="#"
                            onClick={() => {
                              auth.logout();
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                  {auth.user && (
                    <li className="nav-item">
                      <Link className="navbar-brand nav-link" to="/cart">
                        <i class="bi bi-cart-fill"></i>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
