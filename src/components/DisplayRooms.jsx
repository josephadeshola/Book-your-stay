import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./styles/displayroom.css";
import { allServices, viewAll } from "./Service";
import { allServicesTwo } from "./Info";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
const DisplayRooms = () => {
  const navigate=useNavigate();
  const toCreateAccount=()=>{
    navigate("/create")
  }
  const Rooms = [
    {
      image:
        "https://img.freepik.com/free-photo/pillow-bed-with-light-lamp_74190-2095.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "21",
      name: "DELUXE ROOM",
      price: "$479",
    },
    {
      image:
        "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1701021559~exp=1701022159~hmac=d0d12f6e11d6298ef245c98067fea82b33379873733449ce8e5cde2ab53a1243https://img.freepik.com/premium-photo/hotel_664434-4822.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "22",
      name: "STANDARD ROOM",
      price: "$399",
    },
    {
      image:
        "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "23",
      name: "PREMIER ROOM",
      price: "$200",
    },
    {
      image:
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "24",
      name: "FAMILY SUITE",
      price: "$400",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/modern-bedroom-with-working-desk-bedding_41487-836.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "25",
      name: "LUXURY SUITE",
      price: "$500",
    },

    {
      image:
        "https://img.freepik.com/free-photo/bedroom-with-bed-chair-front-sliding-glass-door_1340-25294.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "26",
      name: "KING ROOM",
      price: "$250",
    },
    {
      image:
        "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "27",
      name: "EFFICIENCY ROOM",
      price: "$320",
    },
    {
      image:
        "https://img.freepik.com/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111480.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "28",
      name: "QUAD ROOM",
      price: "$304",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/travel-concept-beautiful-modern-mansions-hotels-bedroom-interior-design_872147-40588.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "29",
      name: "TRIPLE ROOM",
      price: "$500",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/luxury-modern-cozy-sea-view-double-bedroom_36036-382.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "30",
      name: "LUXURY SUITE",
      price: "$450",
    },
    {
      image:
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "31",
      name: "FAMILY SUITE",
      price: "$600",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/luxury-roombedroom-interior_940802-664.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais",
      id: "32",
      name: "PRESIDENTIAL SUITE",
      price: "$490",
    },
  ];
  const location = useLocation();
  console.log(location);
  const { roomId, anotherParam } = useParams();
  const [checkOut, setCheckOut] = useState(
    location.state && location.state.getDate
      ? location.state.getDate.checkout
      : ""
  );
  const [checkin, setCheckIn] = useState(
    location.state && location.state.getDate
      ? location.state.getDate.checkin
      : ""
  );
  const [adult, setAdult] = useState(
    location.state && location.state.getDate && location.state.getDate.options
      ? location.state.getDate.options.adult
      : ""
  );
  const [standardRoom, setStandardRoom] = useState(
    location.state && location.state.getDate
      ? location.state.getDate.standardRoom
      : ""
  );
  const [number, setNumber] = useState(
    location.state && location.state.getDate && location.state.getDate.options
      ? location.state.getDate.options.phoneNumber
      : ""
  );
  const [children, setChildren] = useState(
    location.state && location.state.getDate && location.state.getDate.options
      ? location.state.getDate.options.children
      : ""
  );
  const [room, setRoom] = useState(
    location.state && location.state.getDate && location.state.getDate.options
      ? location.state.getDate.options.room
      : ""
  );
  const [diplayavailability, setDiplayavailability] = useState(false);
  const [getImg, setImg] = useState(
    [...allServices, ...viewAll, ...allServicesTwo].find(
      (item) => item.id === roomId
    )
  );

  const handelAvailability = () => {
    toast.success("Loading Rooms");
    setTimeout(() => {
      setDiplayavailability(true);
    }, 6000);
  };
  const [view, setView] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageReserve, setImageReserve] = useState("");
  const [setHandelView, setSetHandelView] = useState([]);
  const handelView = (selectedImg, handleRadioSub, handleRadioChange) => {
    setSetHandelView([selectedImg]);
    setView(true);
    setSelectedAmout(0);
  };
  const handelViews = (
    reserveImg,
    name,
    price,
    handleRadioSub,
    handleRadioChange
  ) => {
    setImageReserve(reserveImg);
    setName(name);
    setPrice(price);
    setSelectedAmout(0);
  };
  const [selectedAmout, setSelectedAmout] = useState(0);

  const handleRadioChange = () => {
    setSelectedAmout(115);
  };

  const handleRadioSub = () => {
    setSelectedAmout(0);
  };

  const calculateTotalPrice = () => {
    const originalPrice = parseFloat(getImg.price.replace("$", ""));
    return originalPrice + selectedAmout;
  };

  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row  ">
          {imageReserve && (
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
                      Room information
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body modal-height overflow-x-scroll">
                    <img
                      height="280vh"
                      className="col-12 rounded"
                      src={imageReserve}
                      alt=""
                    />
                    <div>
                      <p className="fw-bold mt-2">{name}</p>
                      <div className="fw-bold mb-3">{price}</div>
                      <p
                        style={{
                          backgroundColor: "rgba(202, 228, 237, 0.518)",
                        }}
                        className="py-2 px-3 rounded"
                      >
                        <span className="fw-bold ">
                          <i className="bi fs-3 bi-stars"></i> Highlights
                        </span>
                        <br />
                        <span>
                          Soundproofed Air conditioning Connecting rooms
                          available Free cots/infant beds LCD TV Separate
                          bedroom Premium bedding Rainfall showerhead
                        </span>
                      </p>
                      <p>
                        <i style={{ color: "#a99808 " }} class="bi bi-wifi"></i>
                       <small>Free WiFi</small>
                      </p>
                      <p>
                        <i style={{ color: "#a99808 " }} class="bi bi-tree"></i>
                        <small>  Restaurant</small>
                      </p>
                      <p>
                        <i
                          style={{ color: "#a99808 " }}
                          className="bi bi-bus-front"
                        ></i>
                       <small> Airport transfer</small>
                      </p>
                      <p>
                        <i
                          style={{ color: "#a99808 " }}
                          className="bi bi-people"
                        ></i>
                       <small> Sleeps 3</small>
                      </p>

                      <div className="border rounded px-2">
                        <h4>Room options</h4>
                        <p>Cancellation policy</p>
                        <div className="d-flex gap-2 ">
                          <p>
                            <a href="">More details on all policy options</a>
                          </p>
                          <i class="bi text-danger bi-exclamation-circle"></i>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              // checked={selectedAmout === 0}
                              onChange={handleRadioSub}
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios1"
                            >
                              Non-Refundable
                            </label>
                          </div>
                          <div className="fw-bold">+ $0</div>
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                              onChange={handleRadioChange}
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios2"
                            >
                              Fully refundable
                            </label>
                          </div>
                          <div className="fw-bold">+ $115</div>
                        </div>
                        <button className="border mt-3 border-none rounded py-1 px-2  bg-danger text-light ">
                          90% off
                        </button>
                        <h3 className="mt-3">$ {calculateTotalPrice()}</h3>
                        <button data-bs-dismiss="modal" className="btn mt-3  mb-4 btn-success" onClick={toCreateAccount}>Pay off your order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {view && (
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog col-12 overflow-">
                <div className="modal-content overflow-y-scroll">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Room information
                    </h1>
                    <button
                      type="button"
                      class="btn-close bg-warning"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body  w-100">
                    <div className="">
                      {setHandelView.map((eachItem, index) => (
                        <>
                          <img
                            height="280vh"
                            className="col-12 rounded"
                            key={index}
                            src={eachItem.image}
                            alt=""
                          />
                          <div>
                            <p className="fw-bold mt-2">{eachItem.name}</p>
                            <div className="fw-bold mb-3">{eachItem.price}</div>
                            <p
                              style={{
                                backgroundColor: "rgba(202, 228, 237, 0.518)",
                              }}
                              className="py-2 px-3 rounded"
                            >
                              <span className="fw-bold ">
                                <i class="bi fs-3 bi-stars"></i> Highlights
                              </span>
                              <br />
                              <span>
                                Soundproofed Air conditioning Connecting rooms
                                available Free cots/infant beds LCD TV Separate
                                bedroom Premium bedding Rainfall showerhead
                              </span>
                            </p>
                            <p>
                              <i
                                style={{ color: "#a99808 " }}
                                class="bi bi-wifi"
                              ></i>
                              Free WiFi
                            </p>
                            <p>
                              <i
                                style={{ color: "#a99808 " }}
                                class="bi bi-tree"
                              ></i>
                              Restaurant
                            </p>
                            <p>
                              <i
                                style={{ color: "#a99808 " }}
                                class="bi bi-bus-front"
                              ></i>
                              Airport transfer
                            </p>
                            <p>
                              <i
                                style={{ color: "#a99808 " }}
                                class="bi bi-people"
                              ></i>
                              Sleeps 3
                            </p>

                            <div className="border rounded px-2">
                              <h4>Room options</h4>
                              <p>Cancellation policy</p>
                              <div className="d-flex gap-2 ">
                                <p>
                                  <a href="">
                                    More details on all policy options
                                  </a>
                                </p>
                                <i className="bi text-danger bi-exclamation-circle"></i>
                              </div>
                              <button className="border border-none rounded py-1 px-2  bg-danger text-light ">
                                90% off
                              </button>
                              <div className="d-flex gap-2 mt-2">
                              <h3 className="">{eachItem.price}</h3>
                              <p className="text-underline mt-1">$123</p>
                              </div>
                              <small>$1,567 total</small>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                    onClick={toCreateAccount}
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      class="py-2 px-4 rounded btn btn-primary"
                    >
                      Pay off your order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="d-md-flex gap-md-3 justify-content-between">
            <div className="shadow get_bg  pb-3 col-md-4 col-12 rounded">
              <div className="text-dark">
                <h4 className="px-md-4 px-2">Search</h4>
                <div className="px-4 mt-3">
                  <span htmlFor="" className="fw-bold">
                    Room Destination
                  </span>
                  <input
                    type="text"
                    disabled
                    className="col-12 py-2 border bg-light border-none rounded"
                    placeholder={standardRoom}
                  />
                </div>
                <div className="px-4 mt-3">
                  <span htmlFor="" className="mt-2 fw-bold">
                    Check-in date
                  </span>
                  <input
                    type="text"
                    disabled
                    className="col-12 py-2 border border-none bg-light rounded"
                    placeholder={checkin}
                  />
                </div>
                <div className="px-4 mt-3">
                  <span htmlFor="" className="mt-2 fw-bold">
                    Check-out date
                  </span>
                  <input
                    type="text"
                    disabled
                    className="col-12 py-2 border border-none bg-light rounded"
                    placeholder={checkOut}
                  />
                </div>

                <div className="d-flex justify-content-between px-4 mt-4">
                  <span className="fw-bold">Adult</span>
                  <input
                    type="number"
                    disabled
                    min={1}
                    className="col-7 py-2 border border-none bg-light rounded fw-bold"
                    placeholder={adult}
                  />
                </div>
                <div className="d-flex justify-content-between px-4 mt-4">
                  <span className="fw-bold">Children</span>
                  <input
                    type="number"
                    disabled
                    min={0}
                    className="col-7 py-2 border border-none bg-light rounded fw-bold"
                    placeholder={children}
                  />
                </div>
                <div className="d-flex justify-content-between  px-4 mt-4">
                  <span className="fw-bold">Room</span>
                  <input
                    type="number"
                    disabled
                    min={1}
                    className="col-7 py-2 border bg-light border-none rounded fw-bold"
                    placeholder={room}
                  />
                </div>
              </div>
              <div className="px-4">
                <button
                  onClick={handelAvailability}
                  className="btn rounded  w-100 text-light  mt-5 col-md-4 col-12 py-3  py-0"
                >
                  SEE AVAILABILITY
                </button>
              </div>
            </div>

            <div className="mx-auto col-md-8 ">
              <div className="border mt-md-0 mt-3 d-md-flex  shadow justify-content-between gap-md-3 py-3 px-4  col-12">
                <div className="col-md-4 col-12">
                  <img
                    src={getImg.image}
                    className="rounded room-img col-md-12 col-12"
                  />
                </div>
                <div className="col-md-8 col-12 px-1">
                  <div className="d-md-flex mt-md-3 mt-3 d-flex">
                    <h5 style={{ color: "#a99808" }} className="w-100 fw-bold">
                      Tower Street Apartments
                    </h5>
                    <div className="fw-bold">Excellent</div>
                  </div>
                  <div>500m from center</div>
                  <div className="alert alert-success col-md-4 col-6 mt-md-0 mt-2 py-1 fw-bold">
                    Free airport taxi
                  </div>
                  <div className="fw-bold">
                    Studio apartment with air conditioning
                  </div>
                  <div className="d-md-flex mt-md-2 mt-3 justify-content-between ">
                    <div>Entire studio * 1 bedroom * 21m2 1 full bed</div>
                    <div className="fw-bold fs-4">{getImg.price}</div>
                  </div>
                  <div className="d-md-flex mt-md-3 mt-3 justify-content-between">
                    <div className="text-success fw-bold">
                      Free cancellation
                    </div>
                    <div>Include taxi and fee</div>
                  </div>
                  <div className="d-md-flex mt-md-3 mt-3 justify-content-between">
                    <p className="text-success">
                      you can cancel later, os lock in this great price today!
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModals"
                      onClick={() =>
                        handelViews(
                          getImg.image,
                          getImg.name,
                          getImg.price,
                         
                        )
                      }
                      className="btn rounded text-light col-md-3 col-12 py-3   py-0"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
              {diplayavailability && (
                <div className="col-md-12 col-12  get-grid mt-3">
                  {Rooms.map((allimag, i) => (
                    <>
                      <div
                        className="col-md-12 gap-style col-12"
                        key={allimag.image}
                      >
                        <img
                          src={allimag.image}
                          className="img-fluid shadow rounded col-12  "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handelView(allimag)}
                        />
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRooms;
