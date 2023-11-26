// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import './displayroom.css'


const DisplayRooms = () => {
  // const location = useLocation()
  // console.log(location);
    return (
      <div>
        <div className='container ' >
          <div className="row">
            <div style={{backgroundColor:" #dcaa14c2"}} className='shadow pb-3 col-md-4 col-12 rounded'>
              <div className='text-light'>
                <h4 className='px-4 my-'>Search</h4>
                <div className='px-4'>
                <label htmlFor="" className='mt'>Destination</label>
                <input type="text" className='col-12 py-2 border border-none rounded' placeholder='search your destination' />
                </div>
                <div className='px-4'>
                <label htmlFor="" className='mt-2'>Check-in date</label>
                <input type="text" className='col-12 py-2 border border-none rounded' placeholder='Check-in date' />
                </div>
                <div className='px-4'>
                <label htmlFor="" className='mt-2'>Check-out date</label>
                <input type="text" className='col-12 py-2 border border-none rounded' placeholder='Check-out date' />
                </div>
                <b className='px-4 '> Options</b>
                <div className='d-flex mt-3 justify-content-between px-4'>
                <span>Min Price per night</span> 
                <input type="increment" className='col-7 py-2 border border-none rounded' placeholder='' />
                </div>
                <div className='d-flex justify-content-between px-4 mt-3'>
                <span>Max Price per night</span> 
                <input type="increment" className='col-7 py-2 border border-none rounded' placeholder='' />
                </div>
                <div className='d-flex justify-content-between px-4 mt-3'>
                <span>Adult</span> 
                <input type="increment" className='col-7 py-2 border border-none rounded' placeholder='' />
                </div>
                <div className='d-flex justify-content-between px-4 mt-3'>
                <span>Children</span> 
                <input type="increment" className='col-7 py-2 border border-none rounded' placeholder='' />
                </div>
                <div className='d-flex justify-content-between px-4 mt-3'>
                <span>Room</span> 
                <input type="increment" className='col-7 py-2 border border-none rounded' placeholder='' />
                </div>

              </div>
            </div>
            <div className='col-md-8 col-12 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt adipisci cumque ad molestias rerum? Suscipit eaque nesciunt vel adipisci nam ipsam sit beatae pariatur? Iste aliquid tempore odit libero dolore dolorum voluptates alias. Quo natus deserunt blanditiis in voluptate numquam pariatur quaerat reprehenderit dolorem officiis velit voluptas deleniti quae cvcvcdvdsint ullam quod, aperiam quisquam mollitia vitae assumenda molestias necessitatibus!
            </div>
          </div>
        </div>
      </div>
    );
  }


export default DisplayRooms;
