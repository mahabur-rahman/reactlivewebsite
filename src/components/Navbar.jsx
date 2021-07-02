import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" width="50" />
              <span className="logoName">ReactJs</span>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    exact
                    className="nav-link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link"
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeMenu"
                    className="nav-link"
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
