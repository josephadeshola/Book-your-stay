import React from 'react'

const Modal = () => {
  return (
    <div>

<div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
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
              className="btn-close bg-warning"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body  w-100">
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
                        <i className="bi fs-3 bi-stars"></i> Highlights
                      </span>
                      <br />
                      <span>
                        Soundproofed Air conditioning Connecting rooms
                        available Free cots/infant beds LCD TV Separate bedroom
                        Premium bedding Rainfall showerhead
                      </span>
                    </p>
                    <p>
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi bi-wifi"
                      ></i>
                      Free WiFi
                    </p>
                    <p>
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi bi-tree"
                      ></i>
                      Restaurant
                    </p>
                    <p>
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi bi-bus-front"
                      ></i>
                      Airport transfer
                    </p>
                    <p>
                      <i
                        style={{ color: "#a99808 " }}
                        className="bi bi-people"
                      ></i>
                      Sleeps 3
                    </p>

                    <div className="border rounded px-2">
                      <h4>Room options</h4>
                      <p>Cancellation policy</p>
                      <div className="d-flex gap-2 ">
                        <p>
                          <a href="">More details on all policy options</a>
                        </p>
                        <i className="bi text-danger bi-exclamation-circle"></i>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id={`exampleRadios1-${index}`}
                            value="option1"
                            // checked={selectedAmout === 0}
                            onChange={handleRadioSub}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`exampleRadios1-${index}`}
                          >
                            Non-Refundable
                          </label>
                        </div>
                        <div className="fw-bold">+ $0</div>
                      </div>
                      <div className="d-flex mt-3 justify-content-between">
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id={`exampleRadios2-${index}`}
                            value="option2"
                            onChange={handleRadioChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`exampleRadios2-${index}`}
                          >
                            Fully refundable
                          </label>
                        </div>
                        <div className="fw-bold">+ $115</div>
                      </div>
                      <button className="border mt-3 border-none rounded py-1 px-2  bg-danger text-light ">
                        90% off
                      </button>
                      <h3 className="mt-3">{eachItem.price}</h3>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="py-2 px-4 rounded btn btn-primary"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Modal