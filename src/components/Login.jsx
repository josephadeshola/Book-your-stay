import React, { useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import "./styles/login.css";
import { toast } from "react-toastify";
import baseUrl from "../BaseUrl";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("password is required"),
    }),
    onSubmit: (values) => {
      console.log("login Details", values);
      axios.post( baseUrl + "/login" ,values)
      .then((res)=>{
        if(res.data.status==true){
          toast.success(res.data.message);
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((err)=>{
        console.log("login error", err);
      })
    },
  });

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
          <form className="form-body col-md-6 col-11 mx-auto" onSubmit={formik.handleSubmit}>
            <div>
              <h3 className="text-center mt-md-2  py-4 py-md-0">
                Login Account
              </h3>
              <div className=" mx-auto">
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
                    name="email"
                    class="form-control py-3 bg-light border border-none"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                   <small className="text-danger ms-4 mt-2 p-4">
                   {formik.errors.email
                   }
                 </small>
                )}
                <div class="input-group flex-nowrap mt-md-3 mt-4">
                  <span
                    class="input-group-text border   border-none"
                    id="addon-wrapping"
                  >
                    <i
                      style={{ color: "#a99808" }}
                      class="bi bi-lock fs-3 "
                    ></i>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    class="form-control py-3 bg-light border border-none"
                    placeholder="Password"
                    value={formik.values.password}
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
                    style={{ borderRadius: "30px" }}
                    className="btn py-3 w-100 mb-3  mt-3"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <div className="d-md-flex text-center justify-content-between">
                    <div>
                  Don't have an account
                   <Link to={'/forgot/password'} className="text-decoration-none ms-2 fw-bold">Forget Password</Link>
                    </div>
                    <div className="py-3">
                  Don't have an account <Link to={'/create'} className="text-decoration-none ms-2 fw-bold">Create</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
