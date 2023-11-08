import React from "react";

const Service = () => {
  let allServices = [
    {
      image:
        "https://img.freepik.com/free-photo/dining-terrace-open-restaurant-with-sofas-chairs-tables_114579-2728.jpg?w=740&t=st=1698871489~exp=1698872089~hmac=1945f04efb7990150257482e024a4c4616c9a2094b41cfbf605bcde21331d375",
      name: "Venice Hotel",
      price: "$750.35",
      star: "4.8 (45)",
      effect: "zoom-out-down",
      location: "2715 Sh, South Dakota",
      day: "4Day/3Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-sky-orchid-water-outdoor_1203-5205.jpg?w=740&t=st=1698871624~exp=1698872224~hmac=eda0fd8a95a80cd1a1094e23fc8042d4a77d8c245af0035186d679b08ca617de",
      name: "Cedar Point",
      price: "$830.75",
      star: "4.8 (45)",
      effect: "zoom-out-left",
      location: "6391 Elgin St.Celina",
      day: "5Day/3Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/white-sky-umbrella-nobody-party_1203-4522.jpg?2&w=740&t=st=1698872266~exp=1698872866~hmac=43f0185d30af577e0d597a22b3061382644b0f25e3baf765e8b0b1020591cbb9",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
  ];

  return (
    <div>
      <div data-aos="zoom-out-right" className="px-md-5 px-3">
        <h6 className="mt-5" style={{ color: "#dcaa14c2" }}>
          HOT OFFER
        </h6>
        <h3>Best offer for the month</h3>
        <p className="col-md-5">
          Explore our best offer for your stay while your're on vacation with
          family of business trip
        </p>
        <a
          style={{ color: "#dcaa14c2" }}
          className="float-end text-decoration-none"
          href=""
        >
          View all
        </a>
      </div>

      <div className="d-md-flex d-flex get-overflow  col-12 mt-5 pb-3 justify-content-between">
        {allServices.map((eachItem) => (
          <div
            data-aos={eachItem.effect}
            className="mx-auto px-md-3 px-2 shadow  rounded py-md-4 py-2 col-md-3 col-12"
          >
            <img
              style={{ height: "35vh" }}
              className="col-md-12 col-12 rounded mx-auto"
              src={eachItem.image}
              alt=""
            />
            <div className="mt-4 px-md-0 px-3 pb-3">
              <name className="mt-3">{eachItem.name}</name>
              <star className="float-end star mt-2">
                <i
                  style={{ color: "#dcaa14c2" }}
                  class="bi fs-6 bi-star-fill"
                ></i>
                {eachItem.star}
              </star>
              <br />
              <location className="location">
                <i
                  style={{ color: "#dcaa14c2" }}
                  class="bi fs-6 bi-geo-alt-fill"
                ></i>
                {eachItem.location}
              </location>
              <br />
              <price className="fs-4 fw-bold ">{eachItem.price}</price>
              <day className="float-end mt-2 day">
                <i class="bi bi-calendar2-day-fill fs-6"></i>
                {eachItem.day}
              </day>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
