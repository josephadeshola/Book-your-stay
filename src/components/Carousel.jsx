import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel col-md-11 mt-md-5 py-md-5 mt-5 py-4 mx-auto slide carousel-fade"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/beautiful-silhouette-palm-tree-with-umbrella-chair_74190-2099.jpg?w=740&t=st=1698859882~exp=1698860482~hmac=f1f69d92e841ead1256a2b2c7cc54eaf44c5de0910ea5ceb8dad7491dceb15fa"
              class="d-block w-100 home-img"
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
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1698849206~exp=1698852806~hmac=a26c3ada91ce9ffb814b24ba3a83d61a67a0bdd43ce6cf1e5e41ac0156bc11ca&w=740"
              class="d-block w-100 home-img"
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
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/silhouette-palm-tree-swimming-pool_74190-2091.jpg?w=740&t=st=1698866972~exp=1698867572~hmac=9fe413608a87d28225b395d6d3d830d790547715ed65c0f14ce57329fa48290d"
              class="d-block w-100 home-img"
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-warning  py-3 px-3"
            style={{ borderRadius: "50px" }}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-warning  py-3 px-3"
            style={{ borderRadius: "50px" }}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        style={{ backgroundColor: "#dcaa14c2" }}
        className=" py-4 px-5 d-md-flex justify-content-between"
      >
        <div
          // data-aos="zoom-out-left"
          className="d-grid text-center fs-md-6 text-light"
        >
          <i class="bi bi-person-video2 mt-2 fs-1  "></i>
          <small>Happy Customer</small>
        </div>
        <div
          // data-aos="zoom-out-left"
          className="d-grid text-center fs-md-6 text-light"
        >
          <i class="bi bi-emoji-smile-fill mt-2 fs-1  "></i>
          <small>Best Destination</small>
        </div>
        <div
          // data-aos="zoom-out-left"
          className="d-grid text-center fs-md-6 text-light"
        >
          <i class="bi bi-asterisk mt-2 fs-1  "></i>
          <small>Friendly Price</small>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
