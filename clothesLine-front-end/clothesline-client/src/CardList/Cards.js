import React from "react";
import "./cards.css";
import "../NavBar/navbar.css";

const Cards = ({item, view}) => {
  return (
    <div class="container">
      <div class="col-md-12">
        <section class="panel">
          <div class="panel-body">
            <div class="col-md-6">
              <div class="pro-img-details">
                <img
                  className="image-item"
                  src="https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-6">
              <h4 class="pro-d-title">
                <h1 class="">{view.name}</h1>
              </h4>
              <p>
                Praesent ac condimentum felis. Nulla at nisl orci, at dignissim
                dolor, The best product descriptions address your ideal buyer
                directly and personally. The best product descriptions address
                your ideal buyer directly and personally.
              </p>

              <div class="m-bot15">
                {" "}
                <strong>Price : </strong> <span class="amount-old">$544</span>{" "}
                <span class="pro-price"> $300.00</span>
              </div>
              <div class="form-group">
                <label>Quantity</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  class="form-control quantity"
                />
              </div>
              <p>
                <button class="btn-sign" type="button">
                  <i class="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="side-div">
        <img
          className="animate__animated animate__rubberBand"
          id="thanks-image"
          src="https://miro.medium.com/max/1838/1*N41l5WjEFRSR6fR6USWuYg.jpeg"
          alt="thanks"
        />
      </div>
    </div>
  );
};

export default Cards;
