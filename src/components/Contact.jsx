import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full Name : ${data.fullName} Phone : ${data.phone} Email : ${data.email} Message : ${data.message} `
    );
  };

  return (
    <>
      <div id="contactUs" className="py-5 my-5">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5"> Contact Us </h2>{" "}
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Full Name{" "}
                  </label>{" "}
                  <input
                    type="text"
                    name="fullName"
                    onChange={inputEvent}
                    value={data.fullName}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>{" "}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Phone{" "}
                  </label>{" "}
                  <input
                    type="text"
                    name="phone"
                    onChange={inputEvent}
                    value={data.phone}
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Mobile number"
                  />
                </div>{" "}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="form-label"
                  >
                    Email{" "}
                  </label>{" "}
                  <input
                    type="email"
                    name="email"
                    onChange={inputEvent}
                    value={data.email}
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="abc@gmail.com"
                  />
                </div>{" "}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message{" "}
                  </label>{" "}
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write a message"
                    rows="3"
                  ></textarea>{" "}
                </div>{" "}
                <button className="btn btn-outline-primary"> Submit </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Contact;
