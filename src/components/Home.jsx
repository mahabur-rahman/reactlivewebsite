import React from "react";
import banner from "./img/banner.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        nameTwo="React Js 😄"
        imgSrc={banner}
        visit="/service"
        btnName="Get Started"
      />
      {/* <section id="heroBanner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 align-self-center">
              <div className="heroMain">
                <div className="heroLeftSide">
                  <h2 className="display-6 fw-bold text-capitalize">
                    Grow your business with
                    <span className="text-primary"> React Js</span> 😄
                  </h2>
                  <h4 className="my-4">
                    We are the team of react developer who's are making amazing
                    website
                  </h4>
                  <NavLink
                    to="/service"
                    className="btn btn-outline-primary btn-lg"
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto order-1 order-lg-2 align-self-center">
              <img
                className="img-fluid img-thumbnail animated"
                src={Banner}
                alt="Hero Banner Image"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
