import React from "react";
import image from "../assets/image/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="border border-1 col-12 px-md-5 py-md-5 bg-dark">
            <div className="text-light">
              <h5 className="ms-md-4">Join us on our platform</h5>
              <p className="ms-md-4">we will send you a nice letter per week. No spam. </p>
              <div className="d-flex">
                <img className="col-md-1 col-2 " src={image} alt="" />
                <h4 className="mt-4">DORC </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
