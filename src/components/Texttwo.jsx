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
          className={` mt-5 py-5 shadow position-relative overflow-x-scroll ${
            setsisibility ? "sideNavWidth" : "sideWidth"
          }`}
          // style={{ width: setsisibility ? "50vw" : "560pc" }}
        >
          <div className="get-overNav ">
            <ul className="sidebar-nav" id="sidebar-nav">
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
                  data-bs-target="#tables-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-layout-text-window-reverse"></i>
                  <span>Tables</span>
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
                <a className="nav-link collapsed" href="pages-register.html">
                  <i className="bi bi-card-list"></i>
                  <span>Register</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="pages-login.html">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pagetitle p-3 ">
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
                            <i class="bi fs-2 bi-hdd-rack"></i>
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

                    <table className="table table-striped shadow">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Guest</th>
                          <th scope="col">Room</th>
                          <th scope="col">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-md-6 col-12 border border-danger mt-3 mt-md-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, incidunt facilis reiciendis sint dolor hic earum
                    maiores nesciunt quis quam animi necessitatibus distinctio
                    ad officiis tenetur vitae soluta vero rem consequuntur
                    impedit et minus quas nemo! Nam dolorum sapiente quos.
                    Ratione, consectetur tempora maxime aliquam beatae iure
                    voluptatum dolores veritatis repellendus quia id pariatur
                    deleniti enim, quasi unde? In culpa quis nobis ipsum
                    exercitationem, expedita minus provident nisi vero? Aut
                    facilis nam reprehenderit amet tenetur veritatis suscipit
                    nostrum, mollitia ab id qui ratione ipsum eligendi magni
                    esse inventore quas cupiditate aliquid soluta aspernatur
                    laudantium porro? Harum, culpa. Officiis harum
                    necessitatibus nostrum atque modi voluptatem ipsam, dolorem
                    doloribus totam quam dicta blanditiis provident ullam!
                    Laboriosam delectus beatae ut in nemo aliquam, atque nobis
                    enim distinctio, dolores id minus. Aperiam blanditiis beatae
                    qui tenetur. Velit possimus quod veritatis quos maiores
                    numquam facilis nihil repellendus quas, suscipit repellat
                    saepe reprehenderit nobis obcaecati illo eveniet sint
                    accusantium quo non vel provident. Molestias soluta
                    cupiditate dolor quis repellat, ipsa minima eius officia!
                    Quae rerum accusantium labore quibusdam impedit magni porro
                    nobis beatae magnam minima voluptatum deserunt laboriosam
                    reiciendis alias cumque, dignissimos delectus earum
                    repudiandae. Repellendus, earum amet! Sapiente dolor aperiam
                    distinctio hic labore eveniet beatae. Quod, repellat esse
                    dolorem aut suscipit magni, atque animi iste quisquam
                    veritatis, natus accusantium pariatur rerum illum! Quae eos
                    sint repellendus magnam quo? Quasi, unde blanditiis
                    excepturi enim magnam in quidem ipsa saepe inventore itaque
                    eaque corrupti aspernatur reprehenderit doloremque iste
                    magni, repellat ullam impedit ab ipsum similique. Maiores
                    dolorum ducimus ab beatae numquam tempora quidem, pariatur
                    magnam a, suscipit nobis fuga expedita nisi cupiditate ipsa
                    mollitia ex nam omnis aut? Perferendis a repellendus
                    quisquam sit vero cum temporibus, nisi dolorum nam delectus
                    culpa, at eveniet architecto. Et eveniet aut accusantium.
                    Doloremque rerum iure debitis obcaecati sunt! Quaerat
                    consequatur sunt rerum tenetur quos ipsum! Quisquam cum
                    expedita nihil magni provident facere autem voluptas. Atque
                    sint ut veniam incidunt mollitia placeat eligendi porro
                    quis! Quaerat placeat veniam assumenda totam dolorum quae?
                    Earum repudiandae eum voluptatem inventore nam fugit
                    quaerat. Illum, vel tenetur doloribus totam quaerat est
                    inventore deserunt velit explicabo distinctio sapiente
                    numquam nesciunt laborum qui nemo tempore, voluptatum iure
                    nam molestiae corrupti laudantium ipsam. Corporis, aut
                    aspernatur, repellendus atque vero repellat cum voluptate
                    labore ut perferendis, a error sapiente odit. Illo omnis
                    officia ad atque quae labore porro sapiente ipsum,
                    consequatur neque officiis, consectetur dicta perspiciatis
                    exercitationem, tempore autem veritatis!
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <main id="main" className="main p-0 border fixed-top  m-0 w-100">
          <header className="bg-white shadow d-flex justify-content-between">
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
