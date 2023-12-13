import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";

import "./signup.css";

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
        .post("http://localhost:5600/user/register", values)
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
          <div className="top-div  py-md-4 py-0 ">
            <Link className="icon-size" to={"/"}>
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

          <form onSubmit={formik.handleSubmit}>
            <div>
              <h3 className="text-center mt-md-2 py-3 py-md-0">
                Create An Account
              </h3>

              <div className="col-md-6 mx-auto">
                <div class="input-group  flex-nowrap mt-md-3 mt-4">
                  <span
                    class="input-group-text border border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      class="bi fs-3 bi-people"
                    ></i>
                  </span>
                  <input
                    name="fullName"
                    value={formik.values.fullName}
                    type="text"
                    class="form-control py-3  bg-light border border-none"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.fullName && formik.touched.fullName && (
                  <small className="text-danger ms-4 mt-2 p-4">
                    {formik.errors.fullName}
                  </small>
                )}
                <div class="input-group flex-nowrap mt-md-3 mt-4">
                  <span
                    class="input-group-text border  border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      class="bi fs-3 bi-envelope"
                    ></i>
                  </span>
                  <input
                    name="email"
                    value={formik.values.email}
                    type="email"
                    class="form-control py-3  bg-light border border-none"
                    placeholder="Email"
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <small className="text-danger ms-4 mt-2 p-4">
                    {formik.errors.email}
                  </small>
                )}
                <div class="input-group flex-nowrap mt-md-3 mt-4">
                  <span
                    class="input-group-text border   border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808 " }}
                      class="bi bi-lock fs-3"
                    ></i>
                  </span>
                  <input
                    name="password"
                    value={formik.values.password}
                    type={showPassword ? "text" : "password"}
                    class="form-control py-3  bg-light border border-none"
                    placeholder="Password"
                    onChange={formik.handleChange}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    class="input-group-text border border-none"
                  >
                    {showPassword ? (
                      <i
                        style={{ color: "#a99808 " }}
                        class="bi fs-3 bi-eye"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "#a99808 " }}
                        class="bi fs-3 bi-eye-slash"
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
                    className="btn py-3 w-100 mb-2 mt-3"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div
            style={{ backgroundColor: "#a99808 " }}
            className="bottom-div py-3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
