import React from "react";
import sOne from "./img/s1.jpg";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <img src={props.imgSrc} class="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
