import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import baseUrl from "../BaseUrl";

// import AOS from "aos";
// import "aos/dist/aos.css";
export let allServicesTwo = [
  {
    image:
      "https://img.freepik.com/free-photo/some-delicious-meal-bed-bedroom-side-view_176474-3911.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
    name: "Venice Hotel",
    id: "18",
    price: "$750.35",
    star: "4.8 (45)",
    effect: "zoom-out-down",
    location: "2715 Sh, South Dakota",
    day: "4Day/3Night",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/tag-reservation-placed-table_159341-1242.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
    name: "Cedar Point",
    id: "19",
    price: "$830.75",
    star: "4.8 (45)",
    effect: "zoom-out-left",
    location: "6391 Elgin St.Celina",
    day: "5Day/3Night",
  },
  {
    image:
      "https://img.freepik.com/free-photo/romantic-bedroom_74190-3738.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
    name: "Hazelwood Hotel",
    id: "20",
    price: "$930.85",
    star: "4.8 (45)",
    effect: "zoom-out-right",
    location: "preston Rd. inglewood",
    day: "6Day/5Night",
  },
];
const Info = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 800,
  //   });
  // }, []);
  const navigate = useNavigate();
  const [checkin, setCheckIN] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [openOption, setOpenOption] = useState(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      standardRoom: "",
      checkin: "",
      checkout: "",
      options: {
        adult: 1,
        children: 0,
        room: 1,
      },
    },
    validationSchema: Yup.object({
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
      axios
        .post(baseUrl + "/info/users", values)
        .then((res) => {
          console.log("data found", res);
        })
        .catch((err) => {
          console.log("error found", err);
        });
      toast.success("successfully Booked");
      navigate(`/findrooms/${selectedRoom}`, { state: { getDate } });
    },
  });
  const handleOption = (name, operation) => {
    formik.setValues((prev) => {
      const updatedOptions = {
        ...prev.options,
        [name]:
          operation === "i" ? prev.options[name] + 1 : prev.options[name] - 1,
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
        id="exampleModals"
        tabindex="-1"
        aria-labelledby="exampleModalsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalsLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="modal-body w-100">
                <div className=" col-12 gap-2 ">
                  <div>
                    <div>
                      <label htmlFor="" className="mt-2 pb-2">
                        <i class="bi bi-telephone text-warning"></i> Phone
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
                      <label htmlFor="" className="mt-2 pb-2">
                        <i class="bi bi-flower2 text-warning"></i> Select Room
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
                      <label htmlFor="" className="mt-2 pb-2">
                        <i class="bi bi-patch-check text-warning"></i> Check In
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
                      <label htmlFor="" className="mt-2 pb-2">
                        <i class="bi bi-x-octagon text-warning"></i> Check Out
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
                      <label htmlFor="" className="mt-2 ">
                        <i class="bi bi-people text-warning"></i> Adults
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
              <div class="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  // aria-label="Close"
                  class="py-3 btn btn-primary"
                >
                  Proceed on your booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className=" d-md-flex justify-content-between"
          >
            <img
              className="get-h col-md-5 col-12 rounded"
              src="https://img.freepik.com/free-photo/full-shot-man-carrying-baggage_23-2149963942.jpg?w=740&t=st=1698924057~exp=1698924657~hmac=aa4b9d54a4e384824424d02f60ce09f3588c1b68f043b4700c6d442fd9f5548f"
              alt=""
            />
            <div className="col-md-6 " >
              <h6 style={{ color: "#dcaa14c2" }} className="mt-5">
                BENEFIT
              </h6>
              <h4 className="col-md-5 col-12">
                Comfortable facility around hotels
              </h4>
              <p className="p-color">
                With our platform, we also give customer the best facilities to
                enjoy while they stay in their favorite hotel{" "}
              </p>
              <div className="d-flex gap-2">
                <i class="bi bi-car-front-fill"></i>
                <div>
                  <h6>Free Accommodation</h6>
                  <p className="p-color">
                    Accommodation for you to enjoy exporting around the hotels.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <i class="bi bi-tencent-qq"></i>
                <div>
                  <h6>Free Accommodation</h6>
                  <p className="p-color">
                    Accommodation for you to enjoy exporting around the hotels.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <i class="bi bi-egg-fried"></i>
                <div>
                  <h6>Free Accommodation</h6>
                  <p className="p-color">
                    Accommodation for you to enjoy exporting around the hotels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  className="px-md-5 px-3">
        <h6 className="mt-5" style={{ color: "#dcaa14c2" }}>
          RECOMMENDED HOTEL
        </h6>
        <h3>Hotel for the month</h3>
        <p className="col-md-5">
          Discover uor best recommended hotel for you to stay while on vacation
          or even in business trip.
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
        {allServicesTwo.map((eachItem) => (
          <div
          
            className="mx-auto px-md-3 img-container px-2 shadow  rounded py-md-4 py-2 col-md-3 col-12"
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
                  data-bs-target="#exampleModals"
                  className="btn w-50 text-light rounded text-center py-2"
                  onClick={() => setSelectedRoom(eachItem.id)}
                >
                  Book Now
                </button>
                <name className="mt-3">{eachItem.name}</name>
              </div>
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

export default Info;
