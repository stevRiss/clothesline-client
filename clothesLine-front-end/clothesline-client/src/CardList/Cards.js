import React from "react";
import "./cards.css";

const Cards = ({item}) => {
  return (
    <div className="container">
      {/* <div className="row"> */}
        <div className="details-product">
          <img
            src={item.image}
            alt="testing"
          />
          <div className="description-product">
            <h1>{item.name}</h1>
            <h2>{item.size}</h2>
            <h3>{item.color}</h3>
            <h2>{item.price}</h2>

            <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
              <i class="fas fa-shopping-cart pr-2"></i>Add to cart
            </button>
            <button type="button" class="btn btn-light btn-sm mr-1 mb-2">
              <i class="fas fa-info-circle pr-2"></i>Details
            </button>
          </div>
          
          <div className="seller-details">
            <h3>{item.seller}</h3>
            <p>
              Nostrud tempor deserunt qui elit voluptate occaecat deserunt est
              qui minim aliquip ea. Proident nostrud sint ex labore minim minim
              dolor ea elit ad laborum non consectetur. Est culpa labore dolore
              Lorem proident incididunt dolore deserunt magna ea in. Adipisicing
              anim est in laborum excepteur.lorem ipsum
            </p>
          </div>
        </div>
        
      {/* </div> */}
    </div>
  );
};

export default Cards;
