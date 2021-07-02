import React from "react";
// import Banner from "./img/banner.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="heroBanner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 align-self-center">
              <div className="heroMain my-4">
                <div className="heroLeftSide">
                  <h2 className="display-6 fw-bold text-capitalize mt-5 pt-5 mt-md-0 pt-md-0">
                    {props.name}
                    <span className="text-primary"> {props.nameTwo}</span>
                  </h2>
                  <h4 className="my-4">
                    We are the team of react developer who's are making amazing
                    website
                  </h4>
                  <NavLink
                    to={props.visit}
                    className="btn btn-outline-primary btn-lg"
                  >
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mx-auto order-2 align-self-center mb-5 pb-5 mb-md-0 pb-md-0">
              <img
                className="img-fluid img-thumbnail animated"
                src={props.imgSrc}
                alt="Hero Banner Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
