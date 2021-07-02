import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row text-center py-2">
            <div className="col-12">
              <p className="text-capitalize">
                &copy; copy And All Rights Reserved, {year}. Developed By
                <NavLink to="/contact">Mahabur Rahman </NavLink>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
