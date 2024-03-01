import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel col-md-11 mt-md-5 py-md-5 mt-5 py-4 mx-auto slide carousel-fade"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/premium-photo/interior-hotel-long-corridor-with-striped-walkway_164357-8546.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
              className="d-block w-100 home-img"
              alt="..."
            />
            <h1 className="move-img text-light col-md-5 ms-md-5">
              Best Place to Find Comfortable Hotel and Resort
            </h1>
            <p className="p-position text-light ms-md-5 col-md-5">
              Have you ever come across a hotel that feels like home? if not,you
              can find the hotel here.{" "}
            </p>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1698849206~exp=1698852806~hmac=a26c3ada91ce9ffb814b24ba3a83d61a67a0bdd43ce6cf1e5e41ac0156bc11ca&w=740"
              className="d-block w-100 home-img"
              alt="..."
            />
            <h1 className="move-img text-light col-md-5 ms-md-5">
              Best Place to Find Comfortable Hotel and Resort
            </h1>
            <p className="p-position text-light ms-md-5 col-md-5">
              Have you ever come across a hotel that feels like home? if not,you
              can find the hotel here.{" "}
            </p>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/silhouette-palm-tree-swimming-pool_74190-2091.jpg?w=740&t=st=1698866972~exp=1698867572~hmac=9fe413608a87d28225b395d6d3d830d790547715ed65c0f14ce57329fa48290d"
              className="d-block w-100 home-img"
              alt="..."
            />
            <h1 className="move-img text-dark col-md-5 ms-md-5">
              Best Place to Find Comfortable Hotel and Resort
            </h1>
            <p className="p-position text-dark ms-md-5 col-md-5">
              Have you ever come across a hotel that feels like home? if not,you
              can find the hotel here.{" "}
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-warning  py-3 px-3"
            style={{ borderRadius: "50px" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-warning  py-3 px-3"
            style={{ borderRadius: "50px" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className=" py-4 bg-color px-5 d-md-flex justify-content-between"
      >
        <div
          className="d-grid text-center fs-md-6 text-light"
        >
          <i className="bi bi-person-video2 mt-2 fs-1  "></i>
          <small>Happy Customer</small>
        </div>
        <div
          className="d-grid text-center fs-md-6 text-light"
        >
          <i className="bi bi-emoji-smile-fill mt-2 fs-1  "></i>
          <small>Best Destination</small>
        </div>
        <div
          className="d-grid text-center fs-md-6 text-light"
        >
          <i className="bi bi-asterisk mt-2 fs-1  "></i>
          <small>Friendly Price</small>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
