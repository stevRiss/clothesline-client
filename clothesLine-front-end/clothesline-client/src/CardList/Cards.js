import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <div className="container">
      {/* <div className="row"> */}
        <div className="details-product">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
            alt="testing"
          />
          <div className="description-product">
            <h1>Name of the product</h1>
            <h2>Size:</h2>
            <h3>Colors available:</h3>

            <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
              <i class="fas fa-shopping-cart pr-2"></i>Add to cart
            </button>
            <button type="button" class="btn btn-light btn-sm mr-1 mb-2">
              <i class="fas fa-info-circle pr-2"></i>Details
            </button>
          </div>
          
          <div className="seller-details">
            <h3>Seller Name</h3>
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
