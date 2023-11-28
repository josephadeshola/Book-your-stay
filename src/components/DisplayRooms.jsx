import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./displayroom.css";

import { allServices } from "./Service";
const DisplayRooms = () => {
  const location = useLocation();
  const { roomId } = useParams();
  console.log(location);
  const [checkOut, setCheckOut] = useState(location.state.getDate.checkout);
  const [checkin, setCheckIn] = useState(location.state.getDate.checkin);
  const [adult, setAdult] = useState(location.state.getDate.options.adult);
  const [children, setChildren] = useState(
    location.state.getDate.options.children
  );
  const [room, setRoom] = useState(location.state.getDate.options.room);

  const [getImg, setImg] = useState(
    allServices.find((item) => item.id === roomId)
  );
  console.log(getImg);

  // const Rooms= [
  //   {
  //     image:"https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1701021559~exp=1701022159~hmac=d0d12f6e11d6298ef245c98067fea82b33379873733449ce8e5cde2ab53a1243"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1701021559~exp=1701022159~hmac=d0d12f6e11d6298ef245c98067fea82b33379873733449ce8e5cde2ab53a1243https://img.freepik.com/premium-photo/hotel_664434-4822.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/premium-photo/modern-bedroom-with-working-desk-bedding_41487-836.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/premium-photo/luxury-roombedroom-interior_940802-664.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/bedroom-with-bed-chair-front-sliding-glass-door_1340-25294.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111480.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/premium-photo/travel-concept-beautiful-modern-mansions-hotels-bedroom-interior-design_872147-40588.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/premium-photo/luxury-modern-cozy-sea-view-double-bedroom_36036-382.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  //   {
  //     image:"https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais"
  //   },
  // ]
  return (
    <div>
      <div>
        <div className="container ">
          <div className="row justify-content-between ">
            <div className="shadow get_bg pb-3 col-md-4 col-12 rounded">
              <div className="text-light">
                <h4 className="px-4 my-">Search</h4>
                <div className="px-4">
                  <label htmlFor="" className="fw-bold">
                    Destination
                  </label>
                  <input
                    type="text"
                    className="col-12 py-2 border border-none rounded"
                    placeholder="Good hotel"
                  />
                </div>
                <div className="px-4">
                  <label htmlFor="" className="mt-2 fw-bold">
                    Check-in date
                  </label>
                  <input
                    type="text"
                    className="col-12 py-2 border border-none rounded"
                    placeholder={checkin}
                  />
                </div>
                <div className="px-4">
                  <label htmlFor="" className="mt-2 fw-bold">
                    Check-out date
                  </label>
                  <input
                    type="text"
                    className="col-12 py-2 border border-none rounded"
                    placeholder={checkOut}
                  />
                </div>
                <b className="px-4 fs-5 "> Options</b>
                <div className="d-flex mt-3 justify-content-between px-4">
                  <span className="fw-bold">Min Price per night</span>
                  <input
                    type="increment"
                    className="col-7 py-2 border border-none rounded"
                    placeholder=""
                  />
                </div>
                <div className="d-flex justify-content-between px-4 mt-3">
                  <span className="fw-bold">Max Price per night</span>
                  <input
                    type="number"
                    className="col-7 py-2 border border-none rounded"
                    placeholder=""
                  />
                </div>
                <div className="d-flex justify-content-between px-4 mt-3">
                  <span className="fw-bold">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="col-7 py-2 border border-none rounded fw-bold"
                    placeholder={adult}
                  />
                </div>
                <div className="d-flex justify-content-between px-4 mt-3">
                  <span className="fw-bold">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="col-7 py-2 border border-none rounded fw-bold"
                    placeholder={children}
                  />
                </div>
                <div className="d-flex justify-content-between px-4 mt-3">
                  <span className="fw-bold">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="col-7 py-2 border border-none rounded fw-bold"
                    placeholder={room}
                  />
                </div>
              </div>
            </div>

            <div className="room-h border shadow d-md-flex justify-content-between  col-md-8 gap-md-3 py-3 px-4">
            <div className="col-md-4  col-12">
                <img src={getImg.image} className="img-fluid col-md-4" />
                </div>
                <div className="col-md-8 col-12 px-2">
                  
                  <div className="d-md-flex mt-3 d-flex">
                    <h5 className="w-100 fw-bold text-success">
                      Tower Street Apartments
                    </h5>
                    <p className="fw-bold">Excellent</p>
                  </div>
                  <p>500m from center</p>
                  <div className="alert alert-success col-md-4 col-5 py-1 fw-bold">
                    Free airport taxi
                  </div>
                  <p className="fw-bold">
                    Studio apartment with air conditioning
                  </p>
                  <div className="d-flex justify-content-between ">
                    <p>Entire studio * 1 bedroom * 21m2 1 full bed</p>
                    <p className="fw-bold fs-4">{getImg.price}</p>
                  </div>
                </div>
                
         
            </div>

            {/* {
              Rooms.map((allimag)=>(
                <>
                <div className='col-md-12 gap-style col-12 ' key={allimag.image}>
                  <img  src={allimag.image} className='img-fluid col-12  ' />
                </div>
                </>
              ))
            } */}
                     {/* <p>{getImg.name}</p>
          <p>{getImg.star}</p>
          <p>{getImg.day}</p>
          <p>{getImg.location}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRooms;
