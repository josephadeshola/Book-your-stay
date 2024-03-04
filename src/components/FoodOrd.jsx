import React, { useEffect } from "react";
import FoodNav from "./FoodNav";
import "../components/styles/foodOrd.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircular} from "spinners-react";
SpinnerCircular
const FoodOrd = () => {
  const [product, setProduct] = useState([]);
  const [blur, setBlur] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  let endPoint = "http://localhost:5600/api/products";
  //   let endPoint = "https://forkify-api.herokuapp.com/api/v2/recipes"
  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        console.log(res, "product");
        setProduct(res.data);
        const timer = setTimeout(() => setisLoading(false), 2000);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.log(err, "product error");
      });
  }, []);

  return (
    <div className={blur ? "blur-background" : "topN"}>
      <FoodNav setBlur={setBlur} />

      <main id="main">
        <section style={{ marginTop: "8pc" }}>
          <div className="container ">
            <div className="d-md-flex  getMarginTop  justify-content-between gap-md-3">
              <div className="d-none px-4 d-md-block shadow fixed-div">
                <ul className="py-4 ">
                  <h5 className="py-3">Sort by</h5>
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3"
                  >
                    <i className="fa-brands fa-nfc-symbol fs-3"></i>
                    <Link className="nav-link" to={"/"}>
                      Near me
                    </Link>
                  </li>
                  <hr />
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3"
                  >
                    <i className="fa-regular fa-thumbs-up fs-3"></i>
                    <Link className="nav-link " to={"/about"}>
                      Best rated
                    </Link>
                  </li>
                  <hr />
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3"
                  >
                    <i className="fa-solid fa-car-burst fs-3"></i>
                    <Link className="nav-link " to={""}>
                      Delivery free
                    </Link>
                  </li>
                  <hr />
                  <h5 className="py-3">Popular filters</h5>
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3 "
                  >
                    <i className="fa-solid fa-drumstick-bite fs-3"></i>
                    <Link className="nav-link" to={"/"}>
                      Chicken
                    </Link>
                  </li>
                  <hr className="mx-auto" />
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3"
                  >
                    <i className="fa-solid fa-bowl-rice fs-3"></i>
                    <Link className="nav-link " to={"/about"}>
                      Jollof
                    </Link>
                  </li>
                  <hr />
                  <li
                    style={{ listStyle: "none" }}
                    className="nav-item py-1 d-flex gap-3 "
                  >
                    <i className="fa-solid fa-bowl-rice fs-3"></i>
                    <Link className="nav-link " to={""}>
                      Nigerian
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="scroll-div">
                {isLoading ? (
               <div className=" mx-auto text-center text-center ">
                    <SpinnerCircular
                      speed={137}
                      thickness={175}
                      height={"300px"}
                      width={"300px"}
                      left={"30px"}
                      color="rgba(172, 166, 57, 1)"
                      secondaryColor="rgba(172, 150, 57, 0.44)"
                      className="ml-30 text-center"
                    />
                  </div>
                  
                ) : (
                  <>
                    <h1>Restaurants delivery in Ogbomoso</h1>
                    <h3>
                      <i className="fs-3 fa-brands fa-accessible-icon"></i>{" "}
                      Promotions
                    </h3>
                    <div className="d-flex getOverflow py-2  gap-3">
                      {product.map((eachProduct) => (
                        <>
                          <div className="col-md-4 col-12 px-md-3 px-4 shadow rounded">
                            <div className="img-div  py-2 col-div">
                              <img
                                className="col-12"
                                src={eachProduct.image}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <h4 className="h4-tag"> Burger King</h4>
                                <p
                                  style={{ color: "rgb(207, 207, 209)" }}
                                  className="fw-bold"
                                >
                                  Burger King
                                </p>
                              </div>
                              <h5 style={{ color: " #AE8625" }}>
                                <i className="fa-solid fs-3 fa-person-running"></i>
                                FREE
                              </h5>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="d-flex getOverflow py-2  gap-3">
                      {product.map((eachProduct, index) => (
                        <>
                          <div
                            key={index}
                            className="col-md-4 col-12 px-md-3 px-4 shadow rounded"
                          >
                            <div className="img-div  py-2 col-div">
                              <img
                                className="col-12"
                                src={eachProduct.image}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <h4 className="h4-tag"> Burger King</h4>
                                <p
                                  style={{ color: "rgb(207, 207, 209)" }}
                                  className="fw-bold"
                                >
                                  Burger King
                                </p>
                              </div>
                              <h5 style={{ color: " #AE8625" }}>
                                <i className="fa-solid fs-3 fa-person-running"></i>
                                FREE
                              </h5>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="d-flex getOverflow py-2  gap-3">
                      {product.map((eachProduct, index) => (
                        <>
                          <div
                            key={index}
                            className="col-md-4 col-12 px-md-3 px-4 shadow rounded"
                          >
                            <div className="img-div  py-2 col-div">
                              <img
                                className="col-12"
                                src={eachProduct.image}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <h4 className="h4-tag"> Burger King</h4>
                                <p
                                  style={{ color: "rgb(207, 207, 209)" }}
                                  className="fw-bold"
                                >
                                  Burger King
                                </p>
                              </div>
                              <h5 style={{ color: " #AE8625" }}>
                                <i className="fa-solid fs-3 fa-person-running"></i>
                                FREE
                              </h5>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoodOrd;
