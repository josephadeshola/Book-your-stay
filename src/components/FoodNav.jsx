import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FoodNav = ({ setBlur }) => {
  const [open, setOpen] = useState(false);
  Aos.init();
  useEffect(() => {
    setBlur(open);
  }, [open, setBlur]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top mb-5 nav-style getHeight">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex" to={"/"}>
            <img
              className="img-H"
              src="https://img.freepik.com/premium-vector/logo-rastaraunt_985938-117.jpg?w=740"
              alt=""
            />
            <div>
              <span className="span1">D</span>
              <span className="span2">R</span>
              <span className="span3">C</span>
            </div>
          </Link>
          <div className="d-none  d-md-block col-10 mx-auto">
            <div className="d-flex justify-content-between">
              <form
                className="d-flex justify-content-between mt-1 col-7 gap-3 py-2 mx-auto"
                role="search"
              >
                <input
                  style={{ borderRadius: "40px" }}
                  className="form-control  py-3 me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div
                  onClick={() => setOpen(!open)}
                  style={{ cursor: "pointer" }}
                  className="d-flex col-4 bold ms-3 mt-4"
                >
                  <i class="fa-solid fa-location-dot fs-4 text-dark"></i>
                  <h6 className="ms-1">Add your location</h6>
                  <i class="fa-solid text-dark mt-1  fa-chevron-down"></i>
                </div>
              </form>
            </div>
            <hr className="hr-style" />
            {open && (
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
                className="fade col-9 dispMap  py-4 px-5 shadow"
              >
                <i
                  onClick={() => setOpen(!open)}
                  class="fa-regular text-denger getColor fs-2 float-end fa-circle-xmark"
                ></i>
                <div className="d-flex gap-4">
                  <div className="col-5">
                    <h2 className="py-2">Add a delivery address</h2>
                    <input
                      type="text"
                      placeholder="Search for streets, cities, districts..."
                      className="form-control py-3 border border-none"
                    />
                  </div>
                  <div className="col-2 mt-5">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126388.69652878305!2d4.164293140639353!3d8.137396009681213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d45f7179427%3A0x3f70123a2b1a4e05!2sOgbomosho%2C%20Oyo!5e0!3m2!1sen!2sng!4v1709298732243!5m2!1sen!2sng"
                      width="470"
                      height="400"
                      style={{ border: "0", borderRadius: "10px" }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="navbar-toggler border border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars py-1  fs-3 px-1 text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-md-none d-block">
              <ul className="py-4 ">
                <h5 className="py-3 fs-3 text-light">Sort by</h5>
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3"
                >
                  <i className="fa-brands text-light fa-nfc-symbol fs-3"></i>
                  <Link className="nav-link" to={"/"}>
                    Near me
                  </Link>
                </li>
                <hr />
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3"
                >
                  <i className="fa-regular text-light fa-thumbs-up fs-3"></i>
                  <Link className="nav-link " to={"/about"}>
                    Best rated
                  </Link>
                </li>
                <hr />
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3"
                >
                  <i className="fa-solid text-light fa-car-burst fs-3"></i>
                  <Link className="nav-link " to={""}>
                    Delivery free
                  </Link>
                </li>
                <hr />
                <h5 className="py-3">Popular filters</h5>
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3 "
                >
                  <i className="fa-solid text-light fa-drumstick-bite fs-3"></i>
                  <Link className="nav-link" to={"/"}>
                    Chicken
                  </Link>
                </li>
                <hr className="mx-auto" />
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3"
                >
                  <i className="fa-solid text-light fa-bowl-rice fs-3"></i>
                  <Link className="nav-link " to={"/about"}>
                    Jollof
                  </Link>
                </li>
                <hr />
                <li
                  style={{ listStyle: "none" }}
                  className="nav-item py-1 d-flex gap-3 "
                >
                  <i className="fa-solid text-light fa-bowl-rice fs-3"></i>
                  <Link className="nav-link " to={""}>
                    Nigerian
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FoodNav;
