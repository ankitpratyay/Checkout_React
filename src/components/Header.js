import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Shopping App
        </NavLink>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
           
          </ul>
            
            <NavLink to="/cart" className="btn btn-outline-dark ms2">
            <i className="fa-solid fa-cart-shopping me-1"></i></NavLink>
            <span className=" translate-middle badge rounded-pill bg-danger">
          </span>
        </div>
      </div>
    </nav>
  );
}
