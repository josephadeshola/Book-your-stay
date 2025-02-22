import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "white" }}
        class="navbar shadow fixed-top py-1 px-md-3"
      >
        <div class="container-fluid">
          <Link class="navbar-brand get-font" to="/">
            <img className="get-img" src={image} alt="" />
            <b>
              <span style={{ color: "#dcaa14c2" }}>D</span>O{" "}
              <span style={{ color: "#dcaa14c2" }}>R</span>C
            </b>
          </Link>

          <div className="d-md-block d-none">
            <ul class=" d-flex gap-md-5 mt-3 ">
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link " to={"/about"}>
                  About
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link " to={""}>
                  Contact
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link " to={"/food/order"}>
                  Food Ordring
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link " to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn d-md-block d-none rounded text-light  px-4 py-2"
              style={{ backgroundColor: "#dcaa14c2" }}
            >
              <Link className="text-decoration-none text-light" to={"/create"}>
                Signup
              </Link>
            </button>
            <button
              className="btn d-md-block d-none rounded text-light px-4 py-2"
              style={{ backgroundColor: "#dcaa14c2" }}
            >
              <Link className="text-decoration-none text-light" to={"/login"}>
                Login
              </Link>
            </button>
          </div>

          <button
            className="navbar-toggler  d-md-none d-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a className="navbar-brand get-font" href="#">
                  <img className="get-img" src={image} alt="" />
                  <b>
                    <span style={{ color: "#dcaa14c2" }}>D</span>O{" "}
                    <span style={{ color: "#dcaa14c2" }}>R</span>C
                  </b>
                </a>
              </h5>
              <button
                type="button"
                className="btn-close bg-dark text-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              style={{ backgroundColor: "#dcaa14c2" }}
              className="offcanvas-body"
            >
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item">
                  <div className="d-flex gap-3">
                    <i className="bi bi-house mt-2 fs-1 text-light "></i>

                    <Link
                      className="nav-link  fw-bold text-light fs-1"
                      to={"/"}
                    >
                      Home
                    </Link>
                  </div>
                  <hr className="border border-primary" />
                </li>
                <li className="nav-item">
                  <div className="d-flex gap-3">
                    <i className="bi bi-file-person mt-2 text-light fs-1"></i>
                    <Link
                      class="nav-link fw-bold text-light fs-1"
                      to={"/about"}
                    >
                      About
                    </Link>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <li className="nav-item">
                  <div className="d-flex gap-3">
                    <i className="bi bi-hospital mt-2 fs-1 text-light"></i>
                    <a className="nav-link fw-bold text-light fs-1" href="#">
                      Booking
                    </a>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <li class="nav-item">
                  <div className="d-flex gap-3">
                    <i className="bi bi-pc-display-horizontal text-light mt-2 fs-1"></i>
                    <a className="nav-link fw-bold text-light fs-1" href="#">
                      Contact
                    </a>
                  </div>
                  <hr className="border border-primary " />
                </li>

                <li className="nav-item">
                  <div className="d-flex gap-3 ">
                    <i className="bi bi-tags mt-2 fs-1 text-light"></i>
                    <Link
                      className="nav-link fw-bold text-light fs-1 "
                      to={"/food/order"}
                    >
                      Food Ordering
                    </Link>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <li class="nav-item">
                  <div className="d-flex gap-3 ">
                    <i className="bi bi-tags mt-2 fs-1 text-light"></i>
                    <Link
                      className="nav-link fw-bold text-light fs-1 "
                      to={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <div className="d-flex gap-2">
                  <button
                    className="btn rounded text-light px-4 py-2"
                    style={{ backgroundColor: "#dcaa14c2" }}
                  >
                    <Link
                      className="text-decoration-none text-light"
                      to={"/create"}
                    >
                      Signup
                    </Link>
                  </button>
                  <button
                    className="btn rounded text-light px-4 py-2"
                    style={{ backgroundColor: "#dcaa14c2" }}
                  >
                    <Link
                      className="text-decoration-none text-light"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
