import React from "react";
import Card from "./Card";
import Data from "./Data";
const Service = () => {
  return (
    <>
      <section id="service" className="py-5 my-5">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Our Services</h2>
          <div className="row gy-4 text-center">
            {Data.map((value, index) => {
              return (
                <Card key={index} imgSrc={value.imgSrc} title={value.title} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
