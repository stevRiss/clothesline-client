import React from "react";
import "./row.css";
import { useNavigate } from "react-router";

const Row = ({ item, setView }) => {
  const navigate = useNavigate();

  const handleView = (e) => {
    
    navigate("/item", { replace: true });

  }
  return (
    <div class="reduce-row-size">
      <div class="container d-flex justify-content-center">
        <div class="card p-2">
          <div class="p-info px-3 py-3">
            <div>
              <h4 class="mb-0">
                <span className="name-images">{item.name}</span>
              </h4>
            </div>
            <div class="p-price d-flex flex-row">
              <h1 className="price-item">${item.price}</h1>
            </div>
          </div>
          <div class="text-center p-image">
            {" "}
            <img
              className="row-images-resize"
              src={item.image}
              alt="air"
            />{" "}
          </div>
          <div class="p-about">
            <h3>Size: {item.size}</h3>
            <h3>Color: {item.color}</h3>
          </div>
          <div class="buttons d-flex flex-row gap-3 px-3">
            {" "}
            <button class="btn-sign btn-view" onClick = {handleView}>View</button>{" "}
            <button class="btn-sign btn-buynow">Buy Now</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
