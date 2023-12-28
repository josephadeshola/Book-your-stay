import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/image/logo.png";
import imageBgColor from "../assets/image/bgimg.png";
import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";

const Dashboard = () => {
  
  const [setsisibility, setSetVisibility] = useState(false);
  const [userProfile, setUserProfile] = useState(false)


  const openSideBar = ({type}) => {
    setSetVisibility(!setsisibility);
  };
  const chartOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    series: [
      { name: "Sales", data: [31, 40, 28, 51, 42, 82, 56] },
      { name: "Revenue", data: [11, 32, 45, 32, 34, 52, 41] },
      { name: "Customers", data: [15, 11, 32, 18, 9, 24, 11] },
    ],
    markers: {
      size: 4,
    },
    colors: ["#4154f1", "#2eca6a", "#ff771d"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-09-19T00:00:00.000Z", 
        "2023-09-19T01:30:00.000Z", 
        "2023-09-19T02:30:00.000Z", 
        "2023-09-19T03:30:00.000Z", 
        "2023-09-19T04:30:00.000Z", 
        "2023-09-19T05:30:00.000Z", 
        "2023-09-19T06:30:00.000Z", 
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
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
            className={`get-overNav
             ${
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
                <Link className="nav-link " to={"/dashboard"}>
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="nav-heading">Pages</li>
              <li className="nav-item">
                <Link className="nav-link collapsed" to={"/profile"}>
                  <i className="bi bi-person"></i>
                  <span>Profile</span>
                </Link>
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
                              <b> Departure </b>
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
                           Email
                          </th>
                          <th scope="col" className="py-3">
                           Status
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

                  <div className="col-md-6 col-12 px-3 mt-3 mt-md-0">
                    <div className="d-grid  ">
                      
                  
                    <div
                      style={{
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        boxShadow: "0 0 5px  #d5c42aaa",
                      }}
                      className=" float-md-end d-md-flex d-flex gap-md-2 gap-2 py-2  mt-4  col-10 mx-auto px-2 col-md-6 "
                    >
                      
                      <img
                        className="col-md-2 col-2 position-relative shadow "
                        style={{ borderRadius: "50px ", cursor:"pointer" }}
                        src={imageBgColor}
                        alt=""
                        onClick={()=>setUserProfile(!userProfile)}
                      />
                      
                      <div>
                        <b>Ayomide </b>
                        josephay125d@gmail.com
                      </div>

                    </div>
                     {userProfile && (

                       <div className="border bg-white profile-div ms-5 py-2 ">
                      <ul style={{listStyle:"none"}} className="px-2">
                                  <li>
                                    <Link className="dropdown-item d-flex gap-2" to={"/profile"}>
                                      <li className="bi bi-person-circle"></li>
                                    my Profile
                                    </Link>
                                  </li>
                                 
                                  <hr/>
                                  <li>
                                    <a className="dropdown-item d-flex gap-2" href="#">
                                      <li className="bi bi-gear"></li>
                                     Account Settings
                                    </a>
                                  </li>
                                  <hr/>
                                  <li>
                                    <a className="dropdown-item d-flex gap-2" href="#">
                                      <li className="bi bi-question-circle"></li>
                                     Need Help?
                                    </a>
                                  </li>
                                  <hr/>
                                  <li>
                                    <a className="dropdown-item d-flex gap-2" href="#">
                                      <li className="bi bi-box-arrow-in-right"></li>
                                     Sign Out
                                    </a>
                                  </li>
                                </ul>
                      </div>
                        )
                      }
                        </div>
                    <div className="col-md-9 col-12 rounded mx-auto shadow booked-container px-md- px-3">
                      <h4 className="fs-4 py-3">Today's Activities</h4>
                      <div className="d-flex justify-content-between">
                        <div className="booked py-1">
                          5<h6 className="text-dark mt-3"> Booked</h6>
                        </div>
                        <div className="booked py-1">
                          22
                          <h6 className="text-dark mt-3"> Guest</h6>
                        </div>
                        <div className="">
                          <div className="fs-3 fw-bold mt-4 text-success">
                            $967
                          </div>
                          <h6 className="text-dark mt-3">Revenue</h6>
                        </div>
                      </div>
                      <div>
                        <h5 className="mt-4 fw-bold">Weekly State </h5>
                        <div className="col-12">
                          <div className="col-12">
                            <div style={{ border: "none" }} className="card">
                              <div className="filter">
                                <a
                                  className="icon"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                  <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Today
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      This Month
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      This Year
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  Reports <span>/Today</span>
                                </h5>
                                <ApexCharts
                                  options={chartOptions}
                                  series={chartOptions.series}
                                  type="area"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
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
                className="bi bi-list toggle-sidebar-btn  ms-5 mx-3 text-center mt-md-2  mt-2 fs-2"
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

export default Dashboard;
