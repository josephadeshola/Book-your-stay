import React from "react";
import Footer from "./Footer"
const About = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel col-12 get-margin slide"
      >
        <div class="carousel-indicators gap-md-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            style={{ width: "10px ", height: "10px", borderRadius: "100px" }}
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            style={{ width: "10px ", height: "10px", borderRadius: "100px" }}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            style={{ width: "10px ", height: "10px", borderRadius: "100px" }}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="new-high carousel-inner">
          <div class=" get-height carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/room-with-blue-wall-white-ceiling-with-light-it_1340-37650.jpg?t=st=1700408879~exp=1700412479~hmac=524592f73205d21cb48784e183d2bdeb24c125126271495bc4fd6a9817860e72&w=740"
              class="imgHeight  d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/cafe-interior-with-tables-chairs-sunsetgenerative-ai_841229-2495.jpg?w=740"
              class="imgHeight d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/empty-hotel-lobby_693838-1192.jpg?w=740"
              class="imgHeight d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <div className="about-position text-center position-absolute">
          <h1 className="about-h1 text-light">About Our Hotel</h1>
          <p className="p-about text-light">
            {" "}
            Experience Luxury, Comfort, and Exceptional Service
          </p>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            style={{ borderRadius: "50px" }}
            class="carousel-control-prev-icon  bg-dark py-3  py-md-4 px-3  px-md-4"
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
            style={{ borderRadius: "50px" }}
            class="carousel-control-next-icon  bg-dark  py-3  py-md-4 px-3  px-md-4"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden ">Next</span>
        </button>
      </div>

      <section className="about">
        <div className="container-fluid">
          <div className="row mt-md-5 px-md-5 ">
            <div className="col-md-6 col-12">
              <div className="d-md-flex d-flex">
                <img
                  className="col-12 rounded col-md-9"
                  src="https://mediacity.co.in/riorelax/static/media/about_img_02.7e903ba6dfa05e8fba95.png"
                  alt=""
                />
                <img
                  className="col-6 imgPosition col-md-7"
                  src="https://mediacity.co.in/riorelax/static/media/about_img_03.1c5c297b3a2fd0ad6b03.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-md-0  mt-5 col-12">
              <h5 className="about_h5"> About Us</h5>
              <h1 className="about_h1"> Most Safe & Rated Hotel In London.</h1>
              <p>
                Welcome to Our Hotel, Experience a world of comfort and luxury
                at our elegant hotel. With stunning views, exceptional service,
                and top-notch amenities, your stay with us will be truly
                unforgettable.
              </p>
              <p>
                Fine Dining Experience, Indulge your senses in a culinary
                journey like no other. Our talented chefs craft exquisite dishes
                that blend local flavors with international cuisine, ensuring an
                unforgettable dining experience.
              </p>
              <div
                className=""
                style={{ color: "#673624f7", fontWeight: "500" }}
              >
                <div className="d-flex gap-2">
                  <i class="bi bi-check2"></i>
                  <p>24 Month / 24,000km Nationwide Warranty monotone</p>
                </div>
                <div className="d-flex gap-2">
                  <i class="bi bi-check2"></i>
                  <p>
                    Curabitur dapibus nisl a urna congue, in pharetra urna
                    accumsan.
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <i class="bi bi-check2"></i>
                  <p>Customer Rewards Program and excellent technology</p>
                </div>
              </div>
              <button className="btn py-3 px-4 fw-bold">Discover More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="resort">
        <div className="container-fluid">
          <div className="row mt-md-5 py-5 mt-5 px-md-5 py-md-5 ">
            <div className="col-md-6 col-12">
              <div className="d-md-flex d-flex">
                <img
                  className="col-12 get_height rounded col-md-9"
                  src="https://mediacity.co.in/riorelax/static/media/feature.19e9aa21add79eabff7d.png"
                  alt=""
                />
                <img
                  className="col-6 imgPosition2 col-md-7"
                  src="https://mediacity.co.in/riorelax/static/media/about_img_03.1c5c297b3a2fd0ad6b03.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5 col-12">
              <h5 className="about_h5 mt-md-0 mt-4">Luxury Hotel & Resort</h5>
              <h1 className="about_h1">Pearl Of The Adriatic.</h1>
              <p>
                Welcome to Our Hotel, Experience a world of comfort and luxury
                at our elegant hotel. With stunning views, exceptional service,
                and top-notch amenities, your stay with us will be truly
                unforgettable.
              </p>
              <p>
                Fine Dining Experience, Indulge your senses in a culinary
                journey like no other. Our talented chefs craft exquisite dishes
                that blend local flavors with international cuisine, ensuring an
                unforgettable dining experience.
              </p>
              <button className="btn py-3 px-4 fw-bold">Discover More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div  style={{backgroundColor:"#c1bebe61"}} className="text-center container-fluid py-5 ">
       <h5 className="mt-4">Newsletter</h5>
       <h1> Get Best Offers On The Hotel</h1>
        <p className="col-12 "> With the subscription, enjoy your favourite Hotels without having to think about it</p> 
        <div className="d-md-flex col-12 justify-content-center pb-5 text-center">
          <input type="text" className="py-3 col-md-4 col-8 rounded bg-light shadow border border-none" placeholder="Your Email Address" />
          <button className="btn py-md-3 py-3 px-1 px-md-4">SUBSCRIBE NOW</button>
        </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default About;
