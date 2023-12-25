import React, { useState } from "react";
import "./text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/image/logo.png";
import imageBgColor from "../assets/image/bgimg.png";
import { Link } from "react-router-dom";

const Texttwo = () => {
  const [setsisibility, setSetVisibility] = useState(false);

  const openSideBar = () => {
    setSetVisibility(!setsisibility);
  };
  return (
    <div>
      <div className="d-flex">
        <div
          id="sidebar"
          className={` mt-5 py-5  ${
            setsisibility ? "sideNavWidth" : "sideWidth"
          }`}
        >
          <div
            className={`get-overNav ${
              setsisibility ? "sideNavWidth" : "sideWidth"
            }`}
          >
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  data-bs-target="#tables-nav"
                  // data-bs-toggle="collapse"
                  to={"/"}
                >
                  <i className="bi bi-house"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="index.html">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-target="#forms-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-journal-text"></i>
                  <span>Forms</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-target="#charts-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-bar-chart"></i>
                  <span>Charts</span>
                </a>
              </li>

              <li className="nav-heading">Pages</li>
              <li className="nav-item">
                <a className="nav-link collapsed" href="users-profile.html">
                  <i className="bi bi-person"></i>
                  <span>Profile</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" href="pages-faq.html">
                  <i className="bi bi-question-circle"></i>
                  <span>F.A.Q</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" href="pages-contact.html">
                  <i className="bi bi-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link collapsed" to={"/create"}>
                  <i className="bi bi-card-list"></i>
                  <span>Register</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to={"/login"}>
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pagetitle p-3">
          <nav>
            <div className="container">
              <div className="row ">
                <div className="d-md-flex justify-content-between gap-md-2">
                  <div className="col-md-6 col-12 ">
                    <h4>Dashboard</h4>
                    <div
                      id="row-gap"
                      className="d-md-flex justify-content-between gap-md-2 gap-2  mx-auto"
                    >
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                        }}
                        className="shadow py-md-2 py-2 px-md-2 px-2 col-md-4  "
                      >
                        <div className="d-flex gap-md-3 py-md-2">
                          <div className="alert-divIcon ">
                            <i class="bi fs-2 bi-arrow-up-right-square"></i>
                          </div>
                          <p>
                            <div>
                              <b> Arrivals </b>{" "}
                            </div>
                            <small>This Week</small>
                          </p>
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                          <img className="col-3" src={imageBgColor} alt="" />
                          <b className="fs-2">54</b>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                        }}
                        className="shadow py-md-2 py-2 px-md-2 px-2 col-md-4  "
                      >
                        <div className="d-flex gap-md-3 py-md-2 py-2">
                          <div className="alert-divIcon ">
                            <i className="bi fs-2 bi-hdd-rack"></i>
                          </div>
                          <p>
                            <div>
                              <b> Departure </b>{" "}
                            </div>
                            <small>This Week</small>
                          </p>
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                          <img className="col-3" src={imageBgColor} alt="" />
                          <b className="fs-2">12</b>
                        </div>
                      </div>
                      <div
                        style={{ borderRadius: "20px" }}
                        className="shadow occupied py-md-2 px-md-2 px-2 py-2 mt-md-0 mt-3 col-md-4  "
                      >
                        <div className="d-flex  justify-content-between">
                          <img className="col-3" src={imageBgColor} alt="" />
                          <b className="fs-2 text-white">12</b>
                        </div>
                        <b className="fs-2 text-white">10</b>
                        <p className="text-center text-light fw-bold mt-3">
                          Rooms Occupied
                        </p>
                      </div>
                    </div>
                    <ul style={{ listStyle: "none " }} className="">
                      <li className="d-flex justify-content-around text-center mt-5 ">
                        <a
                          href=""
                          style={{ color: " rgb(56, 55, 55)" }}
                          className="text-decoration-none "
                        >
                          Arrival
                        </a>
                        <a
                          href=""
                          style={{ color: " rgb(56, 55, 55)" }}
                          className="text-decoration-none "
                        >
                          Departure
                        </a>
                        <a
                          href=""
                          style={{ color: " rgb(56, 55, 55)" }}
                          className="text-decoration-none "
                        >
                          Stay-over
                        </a>
                        <a
                          href=""
                          style={{ color: " rgb(56, 55, 55)" }}
                          className="text-decoration-none "
                        >
                          In-house
                        </a>
                      </li>
                    </ul>

                    <table className="table rounded  shadow">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3">
                            ID
                          </th>
                          <th scope="col" className="py-3">
                            Guest
                          </th>
                          <th scope="col" className="py-3">
                            Room
                          </th>
                          <th scope="col" className="py-3">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="py-3" scope="row">
                            1
                          </th>
                          <td className="py-3">Mark</td>
                          <td className="py-3">Otto</td>
                          <td className="py-3">@mdo</td>
                        </tr>
                        <tr>
                          <th className="py-3" scope="row">
                            2
                          </th>
                          <td className="py-3">Jacob</td>
                          <td className="py-3">Thornton</td>
                          <td className="py-3">@fat</td>
                        </tr>
                        <tr>
                          <th className="py-3" scope="row">
                            3
                          </th>
                          <td className="py-3" colspan="2">
                            Larry the Bird
                          </td>
                          <td className="py-3">@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-md-6 col-12 border px-3 border-danger mt-3 mt-md-0">
                    <div
                      style={{
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        boxShadow: "0 0 5px  #d5c42aaa",
                      }}
                      className=" float-md-end d-md-flex d-flex gap-md-2 gap-2 py-2  col-10 mx-auto px-2 col-md-6 "
                    >
                      <img
                        className="col-md-2 col-2 shadow"
                        style={{ borderRadius: "50px " }}
                        src={imageBgColor}
                        alt=""
                      />
                      <div>
                        <b>Ayomide </b>
                        josephay125d@gmail.com
                      </div>
                    </div>
                    <div className="col-md-9 rounded mx-auto shadow booked-container py-2 bg-light px-md-5 px-3">
                      <h4 className="fs-5">Today's Activities</h4>
                      <div className="d-flex justify-content-between">
                        <div className="booked py-1">
                          5<h6 className="text-dark mt-3"> Booked</h6>
                        </div>
                        <div className="booked py-1">
                          22
                          <h6 className="text-dark mt-3"> Guest</h6>
                        </div>
                        <div className="">
                          <div className="fs-3 fw-bold mt-4 text-success">$967</div>
                          <h6 className="text-dark mt-3">Revenue</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <main id="main" className="main p-0 fixed-top  m-0 w-100">
          <header className="bg-white shadow border d-flex justify-content-between">
            <div className="d-flex">
              <Link class="navbar-brand get-font" to="/">
                <img className="get-img" src={image} alt="" />
                <b>
                  <span style={{ color: "#dcaa14c2" }}>D</span>O{" "}
                  <span style={{ color: "#dcaa14c2" }}>R</span>C
                </b>
              </Link>
              <i
                className="bi bi-list toggle-sidebar-btn  mx-3 ms-5 mt-md-2  mt-2 fs-2"
                onClick={openSideBar}
              ></i>
            </div>

            {/* Your other header JSX */}
          </header>
        </main>
      </div>
    </div>
  );
};

export default Texttwo;
