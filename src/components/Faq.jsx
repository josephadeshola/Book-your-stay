import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <div className="text-center">
              <h5 style={{ color: "#dcaa14c2" }}>FAQs</h5>
              <h1>Frequently ask question</h1>
              <p className="col-12 col-md-6 mx-auto">
                Everything you need to know right here fingertips. Ask
                questions, browse around for answer or submit your feature
                requests.{" "}
              </p>
            </div>

            <div
              class="accordion accordion-flush d-md-flex gap-md-2"
              id="accordionFlushExample"
            >
              <div className="col-md-6">
                <div class="accordion-item shadow my-4  rounded">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Home to book online?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>

                <div class="accordion-item shadow my-4  rounded">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Home to book offline
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the second item's accordion body. Let's imagine
                      this being filled with some actual content.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div class="accordion-item  shadow my-4  rounded">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Request custom room?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2
                    class="accordion-header shadow my-4  rounded"
                    id="flush-hadingThree"
                  >
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collpseThree"
                      aria-expanded="false"
                      aria-controls="flush-collpseThree"
                    >
                      Can i request room with good views?
                    </button>
                  </h2>
                  <div
                    id="flush-collpseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-hadingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-4">
                <img
                  className=" get-image  col-md-5 col-12 rounded"
                  src="https://img.freepik.com/free-photo/people-working-reception-side-view_23-2149963918.jpg?w=740&t=st=1699454363~exp=1699454963~hmac=9d8f67b3c122e3a92d8cdfbdc47336cdafaf9484e93967502fe46b06661b8e0c"
                  alt=""
                />

                <div
                  data-aos="zoom-out-down"
                  className="py-5 pb-4  get-position bg-light shadow col-md-6 px-5 rounded"
                >
                  <h6>"</h6>
                  <p>
                    <h5 style={{ color: "rgb(197, 197, 18)" }}>Review</h5>i
                    really enjoyed the booking hotels from Named. With easy
                    booking step, i can think about my other holiday preparation
                  </p>
                  <b>Brooklyn Simmons</b>
                  <p>Lovely customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
