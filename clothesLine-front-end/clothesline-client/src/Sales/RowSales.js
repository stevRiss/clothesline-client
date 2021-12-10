import React from "react";
import "./rowSales.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const RowSales = ({ item }) => {
  // const navigate = useNavigate();

  // const handleView = (e) => {
  //   navigate("/item", { replace: true });
  // };
  return (
    <div className="reduce-row-size">
      <div className="container d-flex justify-content-center">
        <div className="card p-2">
          <div className="p-info px-3 py-3">
            <div>
              <h4 className="mb-0">
                <span className="name-images">{item.name} </span>
              </h4>
            </div>
            <div className="p-price d-flex flex-row discount-image">
              <h1 id="price-item-sales">${Math.ceil(item.price * 0.75)}</h1>
            </div>
          </div>
          <div className="text-center p-image">
            {" "}
            <img
              className="row-images-resize"
              src={item.image}
              alt="air"
            />{" "}
          </div>
          <div className="p-about">
            <h3>Size: {item.size}</h3>
            <h3>Color: {item.color}</h3>
          </div>
          <div className="buttons d-flex flex-row gap-3 px-3">
            {" "}
            <NavLink to={"/item/" + item.id}>
              <button className="btn-sign btn-view">View</button>
            </NavLink>
            <button className="btn-sign btn-buynow">Buy Now</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSales;
