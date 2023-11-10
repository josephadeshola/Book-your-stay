import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image/logo.png";
import Carousel from "./Carousel";
const Navbar = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "white" }}
        class="navbar fixed-top px-md-3"
      >
        <div class="container-fluid">
          <a class="navbar-brand get-font" href="#">
            <img className="get-img" src={image} alt="" />
            <b>
              <span style={{ color: "#dcaa14c2" }}>D</span>O{" "}
              <span style={{ color: "#dcaa14c2" }}>R</span>C
            </b>
          </a>

          <div className="d-md-block d-none">
            <ul class=" d-flex gap-md-5 mt-3 ">
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <Link class="nav-link " to={"/about"}>
                  About
                </Link>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <a class="nav-link " href="#">
                  Rooms
                </a>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <a class="nav-link " href="#">
                  Book
                </a>
              </li>
              <li style={{ listStyle: "none" }} class="nav-item ">
                <a class="nav-link " href="#">
                  pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn d-md-block d-none rounded text-light px-4 py-2"
              style={{ backgroundColor: "#dcaa14c2" }}
            >
              Signup
            </button>
            <button
              className="btn d-md-block d-none rounded text-light px-4 py-2"
              style={{ backgroundColor: "#dcaa14c2" }}
            >
              Login
            </button>
          </div>

          <button
            class="navbar-toggler  d-md-none d-block"
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
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <a class="navbar-brand get-font" href="#">
                  <img className="get-img" src={image} alt="" />
                  <b>
                    <span style={{ color: "#dcaa14c2" }}>D</span>O{" "}
                    <span style={{ color: "#dcaa14c2" }}>R</span>C
                  </b>
                </a>
              </h5>
              <button
                type="button"
                class="btn-close bg-dark text-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              style={{ backgroundColor: "#dcaa14c2" }}
              class="offcanvas-body"
            >
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <div className="d-flex gap-3">
                    <i class="bi bi-house mt-2 fs-1 text-light "></i>

                    <Link
                      class="nav-link  fw-bold text-light fs-1"
                      to={"/home"}
                    >
                      About
                    </Link>
                  </div>
                  <hr className="border border-primary" />
                </li>
                <li class="nav-item">
                  <div className="d-flex gap-3">
                    <i class="bi bi-file-person mt-2 text-light fs-1"></i>
                    <Link
                      class="nav-link fw-bold text-light fs-1"
                      to={"/about"}
                    >
                      About
                    </Link>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <li class="nav-item">
                  <div className="d-flex gap-3">
                    <i class="bi bi-hospital mt-2 fs-1 text-light"></i>
                    <a class="nav-link fw-bold text-light fs-1" href="#">
                      Rooms
                    </a>
                  </div>
                  <hr className="border border-primary " />
                </li>
                <li class="nav-item">
                  <div className="d-flex gap-3">
                    <i class="bi bi-pc-display-horizontal text-light mt-2 fs-1"></i>
                    <a class="nav-link fw-bold text-light fs-1" href="#">
                      Book
                    </a>
                  </div>
                  <hr className="border border-primary " />
                </li>

                <li class="nav-item">
                  <div className="d-flex gap-3 ">
                    <i class="bi bi-tags mt-2 fs-1 text-light"></i>
                    <a class="nav-link fw-bold text-light fs-1" href="#">
                      pricing
                    </a>
                  </div>
                  <hr className="border border-primary " />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
