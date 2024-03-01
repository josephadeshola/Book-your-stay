import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import baseUrl from "../BaseUrl";

export let allServices = [
  {
    image:
      "https://img.freepik.com/free-photo/dining-terrace-open-restaurant-with-sofas-chairs-tables_114579-2728.jpg?w=740&t=st=1698871489~exp=1698872089~hmac=1945f04efb7990150257482e024a4c4616c9a2094b41cfbf605bcde21331d375",
    name: "Venice Hotel",
    id: "1",
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
    id: "2",
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
    id: "3",
    star: "4.8 (45)",
    effect: "zoom-out-right",
    location: "preston Rd. inglewood",
    day: "6Day/5Night",
  },
];

export let viewAll = [
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
    name: "Hazelwood Hotel",
    price: "$930.85",
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
    star: "4.8 (45)",
    effect: "zoom-out-right",
    location: "preston Rd. inglewood",
    day: "6Day/5Night",
  },
];
const Service = () => {
  const navigate = useNavigate();
  const [showAllProduct, setShowAllProduct] = useState(false);
  const handleviewAll = () => {
    setShowAllProduct(true);
  };

    const [selectedRoom, setSelectedRoom] = useState(null);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      standardRoom: "",
      checkin: "",
      checkout: "",
      options: {
        adult: 1,
        children: 1,
        room: 1,
      }
    },
    validationSchema:Yup.object({
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{11}$/, "Enter a valid 11-digit phone number"),
      standardRoom: Yup.string().required("Please select a room"),
      checkin: Yup.string().required("Check-in date is required"),
      checkout: Yup.string().required("Check-out date is required"),
    }),
    onSubmit: (values) => {
      let getDate = {
        checkin: values.checkin,
        checkout: values.checkout,
        phoneNumber: values.phoneNumber,
        standardRoom: values.standardRoom,
        options: values.options,
        
      };
  
      axios.post(baseUrl + '/info/users', values)
      .then((res)=>{
        console.log("data found", res);
      })
      .catch((err)=>{
        console.log("error found" , err);
      })
      toast.success("successfully Booked");
      navigate(`/findrooms/${selectedRoom}`, { state: { getDate } });
    },
  });

  const handleOption = (name, operation) => {
    formik.setValues((prev) => {
      const updatedOptions = {
        ...prev.options,
        [name]: operation === "i" ? prev.options[name] + 1 : prev.options[name] - 1,
      };
      return {
        ...prev,
        options: updatedOptions,
      };
    });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog col-12">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                BOOKING FORM
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="modal-body w-100">
                <div className=" col-12 gap-2 ">
                  <div>
                    <div>
                      <label htmlFor="phoneNo" className="mt-2 pb-2">
                        <i className="bi bi-telephone text-warning"></i> Phone
                        Number
                      </label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className={`col-12 py-3 my_modal shadow px-2 ${
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        name="phoneNumber"
                      />
                      {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber ? (
                        <div className="invalid-feedback">
                          {formik.errors.phoneNumber}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="selectRoom" className="mt-2 pb-2">
                        <i className="bi bi-flower2 text-warning"></i> Select Room
                      </label>
                      <select
                        onChange={formik.handleChange}
                        className={`col-12 py-3 my_modal shadow px-2 ${
                          formik.touched.standardRoom &&
                          formik.errors.standardRoom
                            ? "is-invalid"
                            : ""
                        }`}
                        name="standardRoom"
                        value={formik.values.standardRoom}
                      >
                        <option>Premier Room</option>
                        <option>Family Suite</option>
                        <option>Luxury Suite</option>
                        <option>President Suite</option>
                      </select>
                      {formik.touched.standardRoom &&
                      formik.errors.standardRoom ? (
                        <div className="invalid-feedback">
                          {formik.errors.standardRoom}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="checkIn" className="mt-2 pb-2">
                        <i className="bi bi-patch-check text-warning"></i> Check In
                        Date
                      </label>
                      <input
                        type="datetime-local"
                        placeholder=""
                        className={`col-12 py-3 my_modal shadow px-2 ${
                          formik.touched.checkin && formik.errors.checkin
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.checkin}
                        name="checkin"
                      />
                      {formik.touched.checkin && formik.errors.checkin ? (
                        <div className="invalid-feedback">
                          {formik.errors.checkin}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="checkOut" className="mt-2 pb-2">
                        <i className="bi bi-x-octagon text-warning"></i> Check Out
                        Date
                      </label>
                      <input
                        type="datetime-local"
                        placeholder=""
                        className={`col-12 py-3 my_modal shadow px-2 ${
                          formik.touched.checkout && formik.errors.checkout
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.checkout}
                        name="checkout"
                      />
                      {formik.touched.checkout && formik.errors.checkout ? (
                        <div className="invalid-feedback">
                          {formik.errors.checkout}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-12 mx-auto">
                      <label htmlFor="adult" className="mt-2 ">
                        <i className="bi bi-people text-warning"></i> Adults
                      </label>
                      <div className="headerSearchItem">
                        <div
                          onClick={() => setOpenOption(!openOption)}
                          className="headerSearchText col-12  py-3  my_modal mt-3 shadow px-2"
                        >{`${formik.values.options.adult} adult . ${formik.values.options.children} children . ${formik.values.options.room} room`}</div>
                        {openOption && (
                          <div className="options shadow px-2 py-2">
                            <div className="optionItem mt-3 d-flex justify-content-between text-center">
                              <span className="optionText">Adult</span>
                              <div
                                className="optionCounterButton ms-3 border border-warning bg-light rounded px-3"
                                disabled={formik.values.options.adult <= 1}
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </div>
                              <span className="optionCounterNumber">
                                {formik.values.options.adult}
                              </span>
                              <div
                                className="optionCounterButton border border-warning bg-light rounded px-3"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </div>
                            </div>
                            <div className="optionItem mt-3 d-flex justify-content-between text-center">
                              <span className="optionText">children</span>
                              <div
                                className="optionCounterButton border border-warning bg-light rounded px-3"
                                disabled={formik.values.options.children <= 0}
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </div>
                              <span className="optionCounterNumber">
                                {formik.values.options.children}
                              </span>
                              <div
                                className="optionCounterButton border border-warning bg-light rounded px-3"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </div>
                            </div>
                            <div className="optionItem mt-3 d-flex justify-content-between text-center">
                              <span className="optionText">Room</span>
                              <div
                                disabled={formik.values.options.room <= 1}
                                className="optionCounterButton ms-3 border border-warning bg-light rounded px-3"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </div>
                              <span className="optionCounterNumber">
                                {formik.values.options.room}
                              </span>
                              <div
                                className="optionCounterButton border border-warning bg-light rounded px-3"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  // aria-label="Close"
                  className="py-3 btn btn-primary"
                >
                  Proceed on your booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div  className="px-md-5 px-3">
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
          className="px-2 py-1 rounded float-end get_shadow text-decoration-none "
          onClick={handleviewAll}
        >
          View all
        </a>
      </div>

      <div className="d-md-flex d-flex get-overflow col-12 mt-5 justify-content-between">
        {allServices.map((eachItem) => (
          <div
            className="mx-auto px-md-3 px-2 img-container shadow  rounded py-md-4 py-2 col-md-3 col-12"
            key={eachItem.id}
          >
            <img
              style={{ height: "35vh" }}
              className="col-md-12 get col-12 rounded mx-auto"
              src={eachItem.image}
              alt=""
            />
            <div className="mt-4 px-md-0 px-3 pb-3">
              <div className="d-grid">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn w-50 rounded text-center py-2"
                  onClick={() => setSelectedRoom(eachItem.id)}
                >
                  Book Now
                </button>

                <name className="mt-3">{eachItem.name}</name>
              </div>
              <star className="float-end star mt-2">
                <i
                  style={{ color: "#dcaa14c2" }}
                  className="bi fs-6 bi-star-fill"
                ></i>
                {eachItem.star}
              </star>
              <br />
              <location className="location">
                <i
                  style={{ color: "#dcaa14c2" }}
                  className="bi fs-6 bi-geo-alt-fill"
                ></i>
                {eachItem.location}
              </location>
              <br />
              <price className="fs-4 fw-bold ">{eachItem.price}</price>
              <day className="float-end mt-2 day">
                <i className="bi bi-calendar2-day-fill fs-6"></i>
                {eachItem.day}
              </day>
            </div>
          </div>
        ))}
      </div>

      <div className=" get-overflow  col-12 col-md-12 mt-5 pb-3 justify-content-between">
        {viewAll.map((eachItem, index) => (
          <div
            key={index}
            className={`mx-auto px-md-3 px-2 shadow img-container  rounded py-md-4 py-2 col-md-9 col-12 ${
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
              <div className="d-grid">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn w-50 rounded text-center py-2"
                  onClick={() => setSelectedRoom(eachItem.id)}
                >
                  Book Now
                </button>
                <name className="mt-3">{eachItem.name}</name>
              </div>
              <star className="float-end star mt-2">
                <i
                  style={{ color: "#dcaa14c2" }}
                  className="bi fs-6 bi-star-fill"
                ></i>
                {eachItem.star}
              </star>
              <br />
              <location className="location">
                <i
                  style={{ color: "#dcaa14c2" }}
                  className="bi fs-6 bi-geo-alt-fill"
                ></i>
                {eachItem.location}
              </location>
              <br />
              <price className="fs-4 fw-bold ">{eachItem.price}</price>
              <day className="float-end mt-2 day">
                <i className="bi bi-calendar2-day-fill fs-6"></i>
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
