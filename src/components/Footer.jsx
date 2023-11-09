import React from "react";
import image from "../assets/image/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="border border-1 col-12 px-md-5 py-md-5 bg-dark">
            <div className="d-md-flex justify-content-between">
              <div className="text-light">
                <h5 className="ms-md-4 mt-5 mt-md-0">Join us on our platform</h5>
                <p className="ms-md-4">
                  we will send you a nice letter per week. No spam.{" "}
                </p>
                <div className="d-flex">
                  <img className="col-md-2 col-2 " src={image} alt="" />
                  <b className="mt-3">
                    <span style={{ color: "#dcaa14c2" }}>D</span>O
                    <span style={{ color: "#dcaa14c2" }}>R</span>C
                  </b>
                </div>
                <p>
                  A joint venture is an application to collect fees from an
                  agreed plan{" "}
                </p>
              </div>
              <div className="text-light col-md-5">
                <div className="d-md-flex px-md-4  gap-2">

                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="border  border-none form-control py-3"
                  />
                <button style={{backgroundColor:"#dcaa14c2"}} className="btn mt-md-0 mt-2 py-3 py-md-0 px-5 text-light">Send</button>
                  </div>

                <div className="d-md-flex py-3  my-3 mt-4 justify-content-between">
                  <div>
                    <b className="mt-5">Quick Link</b>
                    <div className="mt-3">About Us</div>
                    <div className="mt-3">Desk Support</div>
                    <div className="mt-3 pb-3">Services</div>
                  </div>

                  <div>
                    <b className="mt-5">Company</b>
                    <div className="mt-3">Location</div>
                    <div className="mt-3">Our Mission</div>
                    <div className="mt-3 pb-3">Career</div>
                  </div>

                  <div>
                    <b className="mt-5">Legal Terms</b>
                    <div className="mt-3">Privacy</div>
                    <div className="mt-3">Terms of Use</div>
                    <div className="mt-3 pb-3">Cookis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
