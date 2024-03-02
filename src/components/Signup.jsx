import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./styles//signup.css";
import baseUrl from "../BaseUrl";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Minimum of 8 character")
        .required("password is required"),
    }),
    onSubmit: (values) => {
      console.log("users", values);
      axios
        .post(baseUrl + '/register', values)
        .then((res) => {
          if (res.data.status == true) {
            console.log("myresponse", res);
            setTimeout(() => {
              navigate("/login");
            }, 5000);
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data.message);
          } else if (err.request) {
            toast.error("No response received from the server");
          } else {
            toast.error("Error setting up the request");
          }
        });
    },
  });
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="top-div  py-md-2 py-0 ">
            <Link className="icon-size" to={"/"}>
              <button className="button">
                <div className="button-box">
                  <span className="button-elem">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem">
                    <svg viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </Link>
            <div className="d-flex justify-content-center text-center  gap-4">
              <Link
                to={"/create"}
                className="text-light get-hover text-decoration-none"
                >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="text-light get-hover text-decoration-none"
                >
                Sign In
              </Link>
            </div>
          
          </div>
          <form className="form-body col-md-6 col-11 mx-auto" onSubmit={formik.handleSubmit}>
            <div>
              <h3 className="text-center mt-md-2 py-3 py-md-0">
                Create An Account
              </h3>

              <div className="">
                <div className="input-group  flex-nowrap mt-md-3 mt-4">
                  <span
                    className="input-group-text border border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      className="bi fs-3 bi-people"
                    ></i>
                  </span>
                  <input
                    name="fullName"
                    value={formik.values.fullName}
                    type="text"
                    className="form-control py-3  bg-light border border-none"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.fullName && formik.touched.fullName && (
                  <small className="text-danger ms-4 mt-2 p-4">
                    {formik.errors.fullName}
                  </small>
                )}
                <div className="input-group flex-nowrap mt-md-3 mt-4">
                  <span
                    className="input-group-text border  border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      className="bi fs-3 bi-envelope"
                    ></i>
                  </span>
                  <input
                    name="email"
                    value={formik.values.email}
                    type="email"
                    className="form-control py-3  bg-light border border-none"
                    placeholder="Email"
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <small className="text-danger ms-4 mt-2 p-4">
                    {formik.errors.email}
                  </small>
                )}
                <div className="input-group flex-nowrap mt-md-3 mt-4">
                  <span
                    className="input-group-text border   border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      className="bi bi-lock fs-3"
                    ></i>
                  </span>
                  <input
                    name="password"
                    value={formik.values.password}
                    type={showPassword ? "text" : "password"}
                    className="form-control py-3  bg-light border border-none"
                    placeholder="Password"
                    onChange={formik.handleChange}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="input-group-text border border-none"
                  >
                    {showPassword ? (
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi fs-3 bi-eye"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi fs-3 bi-eye-slash"
                      ></i>
                    )}
                  </span>
                </div>
                {formik.errors.password && formik.touched.password && (
                  <small className="text-danger ms-4 mt-2 p-4">
                    {formik.errors.password}
                  </small>
                )}
                <div>
                  <button
                    style={{
                      backgroundColor: "#a99808 ",
                      borderRadius: "30px",
                    }}
                    type="submit"
                    className="btn py-3 border border-2 text-light w-100 mb-2 mt-3"
                  >
                    Sign Up
                  </button>
                  <div class="google-login-button mb-2 mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span className="btn-span">Log in with Google</span>
        </div>
                  Already have an account <Link to={'/login'} className="text-decoration-none fw-bold">Login</Link>
                </div>
              </div>
            </div>
          </form>        
        </div>
      </div>
    </div>
  );
};

export default Signup;
