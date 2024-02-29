import React from "react";
const FoodNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top mb-5 nav-style getHeight">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold d-flex" href="#">
            <img className="img-H" src="https://img.freepik.com/premium-vector/logo-rastaraunt_985938-117.jpg?w=740" alt="" />
        <div>
          <span className="span1">D</span>
          <span className="span2">R</span>
          <span className="span3">C</span>
        </div>
          </a>
          <div className="d-none  d-md-block col-10 mx-auto">
            <div className="d-flex justify-content-between">

            <form class="d-flex justify-content-between mt-1 col-6 py-2 mx-auto" role="search">
              <input
                className="form-control  py-3 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
              <button class="btn px-5 btn-outline-light" type="submit">
                Search
              </button>
            </form>

            <button class="btn px-5  btn-h mt-3 btn-outline-light">GET STARTED</button>
                </div>
          <hr className="hr-style" />
          </div>
          <button
            class="navbar-toggler border border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars py-1  fs-3 px-1 text-light"></i>
            {/* <span class="navbar-toggler-icon"></span> */}
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-md-none d-block">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            </div>
            <form class="d-flex d-md-none d-block" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn px-4 text-light btn-outline-ligh" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FoodNav;
