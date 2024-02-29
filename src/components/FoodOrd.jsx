import React, { useEffect } from "react";
import FoodNav from "./FoodNav";
import "../components/styles/foodOrd.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const FoodOrd = () => {
  const [product, setProduct] = useState([]);
  let endPoint = "http://localhost:5600/api/products";
  //   let endPoint = "https://forkify-api.herokuapp.com/api/v2/recipes"
  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        console.log(res, "product");
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err, "product error");
      });
  }, []);

  return (
    <div>
      <FoodNav />
      <main id="main">
        <section>
          <div className="container">
            <div className="d-md-flex getMarginTop  justify-content-between gap-md-3">
              <div className="d-none px-4 d-md-block shadow fixed-div">
               
              <ul class="py-4 ">
                <h5 className="py-3">Sort by</h5>
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3">
                <i class="fa-brands fa-nfc-symbol fs-3"></i>
                <Link class="nav-link" to={"/"}>
                Near me
                </Link>
              </li>
                <hr/>
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3">
              <i class="fa-regular fa-thumbs-up fs-3"></i>
                <Link class="nav-link " to={"/about"}>
                 Best rated
                </Link>
              </li>
                <hr />
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3">
              <i class="fa-solid fa-car-burst fs-3"></i>
                <Link class="nav-link "to={""}>
                  Delivery free
                </Link>
              </li>
                <hr />
            <h5 className="py-3">Popular filters</h5>
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3 ">
              <i class="fa-solid fa-drumstick-bite fs-3"></i>
                <Link class="nav-link" to={"/"}>
                 Chicken
                </Link>
              </li>
                <hr className="mx-auto" />
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3">
              <i class="fa-solid fa-bowl-rice fs-3"></i>
                <Link class="nav-link " to={"/about"}>            
                    Jollof
                </Link>
              </li>
                <hr />
              <li style={{ listStyle: "none" }} class="nav-item py-1 d-flex gap-3 ">
              <i class="fa-solid fa-bowl-rice fs-3"></i>
                <Link class="nav-link "to={""}>
                  Nigerian
                </Link>
              </li>
                <hr />
            </ul>
              </div>
              <div className="scroll-div">
                <h1>Restaurants delivery in Ogbomoso</h1>
                <h3>
                  <i class="fs-3 fa-brands fa-accessible-icon"></i> Promotions
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
                            <i class="fa-solid fs-3 fa-person-running"></i>FREE
                          </h5>
                        </div>
                  </div>
                      </>
                    ))}
                </div>
                <div className="d-flex getOverflow py-2  gap-3">
                    {product.map((eachProduct,index) => (
                        <>
                  <div key={index} className="col-md-4 col-12 px-md-3 px-4 shadow rounded">
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
                            <i class="fa-solid fs-3 fa-person-running"></i>FREE
                          </h5>
                        </div>
                  </div>
                      </>
                    ))}
                </div>
                cupiditate, magni voluptatum dolorum quae esse consequuntur
                pariatur a ipsa fugiat? Nostrum voluptatem id, fuga quae sit
                doloremque ab numquam minima mollitia maxime deserunt, iure a
                vel reprehenderit at doloribus exercitationem quo harum delectus
                veritatis totam! Voluptas, impedit sequi. Mollitia eligendi
                exercitationem eius dicta quisquam, quaerat atque odit rerum,
                nisi, vel suscipit? Aperiam fugit sed impedit error aliquid.
                Minus magni voluptates, voluptas nemo sed illo consectetur,
                maxime voluptatem odit adipisci fuga quasi dignissimos
                aspernatur, ratione temporibus accusamus sunt id rem labore
                provident dolor? Odit, atque ullam. Corrupti aspernatur omnis
                ipsum ratione nemo quo commodi odio alias similique autem ut
                nostrum libero tenetur natus eaque sit consequuntur neque
                sapiente in, amet reprehenderit necessitatibus nesciunt at
                eligendi. Cum itaque optio quae nam unde quasi atque earum nobis
                quibusdam iste accusantium vel praesentium error repudiandae
                vitae facere dicta eos tempore, recusandae rem provident
                suscipit! Autem asperiores fuga et ipsam, deleniti repellendus
                cum commodi adipisci, corrupti amet quia ratione. Magnam debitis
                doloribus, eos voluptatibus corporis expedita accusamus sit
                dolore possimus neque veritatis modi illum nostrum et ea autem
                officia aperiam alias dolorem consequuntur unde! Fugiat natus a
                deserunt excepturi culpa aut fuga doloremque obcaecati
                cupiditate ex magnam aliquid consectetur impedit, sunt quis
                ducimus unde facere voluptatum. Cum.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoodOrd;
