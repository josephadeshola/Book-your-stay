import React from "react";


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
        
        <div
          // style={{ height: "50vh",}}
          class="new-high carousel-inner"
        >
          <div class=" get-height carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/outdoor-blue-health-travel-leisure_1203-4670.jpg?w=740&t=st=1700291184~exp=1700291784~hmac=a8fb03531183171d1a79cadf99c868280f6c48fd1ec8e37adfeeb04b5369c912"
              class="imgHeight  d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=740&t=st=1700281706~exp=1700282306~hmac=ddd4a936d3092450166da992c4f051650cd25e9f8992968adf74ea41059357f7"
              class="imgHeight d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/receptionists-elegant-suits-during-work-hours_23-2149714407.jpg?w=740&t=st=1699619717~exp=1699620317~hmac=6b7378566ea42e6ca5eef5b6c8a463cf5ffa9caeb9288e76737d35aacddab4a0"
              class="imgHeight d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <div className="about-position text-center position-absolute">
          <h1 className="about-h1">
           About Our Hotel
          </h1>
         <p className="p-about"> Experience Luxury, Comfort, and Exceptional Service</p>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            style={{ borderRadius: "50px" }}
            class="carousel-control-prev-icon  bg-warning  py-3  py-md-4 px-3  px-md-4"
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
            class="carousel-control-next-icon  bg-warning  py-3  py-md-4 px-3  px-md-4"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default About;
