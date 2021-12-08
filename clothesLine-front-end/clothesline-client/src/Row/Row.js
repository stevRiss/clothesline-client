import React from "react";
import "./row.css";
import "../NavBar/navbar.css";

const Row = ({item}) => {
  return (
    <div class="reduce-row-size">
      <div class="container d-flex justify-content-center">
        <div class="card p-2">
          <div class="p-info px-3 py-3">
            <div>
              <h5 class="mb-0"></h5>{" "}
              <span>{item.name}</span>
            </div>
            <div class="p-price d-flex flex-row">
              {" "}
              <span>$</span>
              <h1>{item.price}</h1>
            </div>
            <div class="heart">
              {" "}
              <i class="bx bx-heart"></i>{" "}
            </div>
          </div>
          <div class="text-center p-image">
            {" "}
            <img src={item.image} alt="air" />{" "}
          </div>
          <div class="p-about">
            <h3>Size:{item.size}</h3>
            <h3>Color:{item.color}</h3>
          </div>
          <div class="buttons d-flex flex-row gap-3 px-3">
            {" "}
            <button class="btn-sign">View</button>{" "}
            <button class="btn-sign">Buy Now</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
