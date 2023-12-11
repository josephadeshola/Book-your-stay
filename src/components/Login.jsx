import React, { useState } from "react";
import "../login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{ backgroundColor: "#a99808 " }}
            className="top-div text-center py-md-4 py-0"
          >
                 <Link to={"/create"}>
            <button class="button">
              <div class="button-box">
                <span class="button-elem">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
                  </Link>
            <div className="d-flex justify-content-center mt-md-5  gap-4">
              <Link to={"/create"} className="text-light text-decoration-none">
                Sign Up
              </Link>
              <Link to={"/login"} className="text-light text-decoration-none">
                Sign In
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-center mt-md-2  py-4 py-md-0">
              Login Account
            </h3>
            <div className="col-md-6 mx-auto">
              <div class="input-group flex-nowrap mt-md-3 mt-4">
                <span
                  class="input-group-text border  border-none"
                  id="addon-wrapping"
                >
                  <i
                    style={{ color: "#a99808" }}
                    class="bi fs-3 bi-envelope"
                  ></i>
                </span>
                <input
                  type="email"
                  class="form-control py-3 bg-light border border-none"
                  placeholder="Email"
                />
              </div>
              <div class="input-group flex-nowrap mt-md-3 mt-4">
                <span
                  class="input-group-text border   border-none"
                  id="addon-wrapping"
                >
                  <i style={{ color: "#a99808" }} class="bi bi-lock fs-3 "></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-control py-3 bg-light border border-none"
                  placeholder="Password"
                />
                <span
                  onClick={togglePasswordVisibility}
                  class="input-group-text border border-none"
                >
                  {showPassword ? (
                    <i style={{ color: "#a99808 " }} class="bi fs-3 bi-eye"></i>
                  ) : (
                    <i
                      style={{ color: "#a99808 " }}
                      class="bi fs-3 bi-eye-slash"
                    ></i>
                  )}
                </span>
              </div>
              <div>
                <button
                  style={{ borderRadius: "30px" }}
                  className="btn py-3 w-100 mb-2  mt-3"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#a99808 " }}
            className="bottom-div py-3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
