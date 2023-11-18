import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div>
          <div  id="carouselExampleIndicators" class="carousel col-12 get-margin slide">
            <div  class="carousel-indicators gap-md-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                style={{width:"10px ",height:"10px",borderRadius:"100px"}}
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                style={{width:"10px ",height:"10px",borderRadius:"100px"}}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                style={{width:"10px ",height:"10px",borderRadius:"100px"}}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div style={{height:'100vh',borderEndStartRadius:"200px"}} class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://img.freepik.com/premium-photo/african-american-guy-hotel-guest-showing-his-passport-receptionist-standing-reception-counter-traveler-with-suitcase-checking-front-desk-upon-arrival-people-traveling_482257-67487.jpg?w=740" class=" d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://img.freepik.com/free-photo/receptionist-elegant-suit-during-work-hours-with-customer_23-2149714436.jpg?w=740&t=st=1699619683~exp=1699620283~hmac=61edcc37b1f21960614bb27d1112cfb684f07cc4642b4bfffc1a7b2be02dd0be" class="d-block w-100" alt="..." />
              </div> 
              <div class="carousel-item">
                <img src="https://img.freepik.com/free-photo/receptionists-elegant-suits-during-work-hours_23-2149714407.jpg?w=740&t=st=1699619717~exp=1699620317~hmac=6b7378566ea42e6ca5eef5b6c8a463cf5ffa9caeb9288e76737d35aacddab4a0" class="d-block w-100" alt="..." />
              </div>
            </div>
            
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    
  );
};

export default About;
