import React from "react";
import "./row.css";
import "../NavBar/navbar.css";

const Row = () => {
  return (
    <div class="reduce-row-size">
      <div class="container d-flex justify-content-center">
        <div class="card p-2">
          <div class="p-info px-3 py-3">
            <div>
              <h5 class="mb-0">Beats By Dre</h5>{" "}
              <span>Professional Headphones</span>
            </div>
            <div class="p-price d-flex flex-row">
              {" "}
              <span>$</span>
              <h1>299</h1>
            </div>
            <div class="heart">
              {" "}
              <i class="bx bx-heart"></i>{" "}
            </div>
          </div>
          <div class="text-center p-image">
            {" "}
            <img src="https://i.imgur.com/hpftqCo.png" alt="air" />{" "}
          </div>
          <div class="p-about">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
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
