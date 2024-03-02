import React, { useEffect, useState } from "react";
import "./styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/image/logo.png";
import imageBgColor from "../assets/image/bgimg.png";
import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [setsisibility, setSetVisibility] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
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
    },  };
  

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
          josephay125d
                </div>

        <main id="main" className="main p-0  fixed-top  m-0 w-100">
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
