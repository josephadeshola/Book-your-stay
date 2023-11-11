import React, { useState } from "react";

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
  const [showAllProduct, setShowAllProduct] = useState(false);
  const handleviewAll = () => {
    setShowAllProduct(true);
  };

  let viewAll = [
    {
      image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60", 
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "$196 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-down",
      location: "preston Rd. inglewood",
      day: "$257 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-left",
      location: "preston Rd. inglewood",
      day: "$181 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "$116 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-top",
      location: "preston Rd. inglewood",
      day: "$657 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "$157 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "$746 per night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D%3D&auto=format&fit=crop&w=400&q=60",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "$65 per night",
    },

    {
      image:
        "https://img.freepik.com/premium-photo/classic-minimalist-bedroom-hotel_377429-342.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/tidy-hotel-room-with-brown-curtains_1203-1493.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pillow-bed_74190-6244.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais  ",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-generative-ai_629315-11308.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      name: "Hazelwood Hotel",
      price: "$930.85",
      star: "4.8 (45)",
      effect: "zoom-out-right",
      location: "preston Rd. inglewood",
      day: "6Day/5Night",
    },
    {
      image:
        "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
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
          style={{ color: "#dcaa14c2", cursor: "pointer" }}
          className="float-end text-decoration-none "
          onClick={handleviewAll}
        >
          View all
        </a>
      </div>

      <div className="d-md-flex d-flex get-overflow overflow-y-scroll  col-12 mt-5 pb-3 justify-content-between">
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
              {/* <button className="btn ">Book Now</button> */}
            </div>
          </div>
        ))}
      </div>

      <div className=" get-overflow overflow-y-scroll  col-12 col-md-12 mt-5 pb-3 justify-content-between">
        {viewAll.map((eachItem, index) => (
          <div
            key={index}
            // data-aos={eachItem.effect}
            className={`mx-auto px-md-3 px-2 shadow  rounded py-md-4 py-2 col-md-9 col-12 ${
              showAllProduct ? "" : "d-none"
            }`}
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
