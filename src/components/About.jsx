import React from "react";
import sOne from "./img/s1.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome To About Page 📃"
        imgSrc={sOne}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
