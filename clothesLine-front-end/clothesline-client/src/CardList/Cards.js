import React from "react";
import "./cards.css";
import "../NavBar/navbar.css";

const Cards = ({item, view}) => {
  return (
    <div className="container">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img
                  classNameName="image-item"
                  src="https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <h1 className="">{view.name}</h1>
              </h4>
              <p>
                Praesent ac condimentum felis. Nulla at nisl orci, at dignissim
                dolor, The best product descriptions address your ideal buyer
                directly and personally. The best product descriptions address
                your ideal buyer directly and personally.
              </p>

              <div className="m-bot15">
                {" "}
                <strong>Price : </strong> <span className="amount-old">$544</span>{" "}
                <span className="pro-price"> $300.00</span>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  className="form-control quantity"
                />
              </div>
              <p>
                <button className="btn-sign" type="button">
                  <i className="fa fa-shopping-cart"></i> Add to Cart
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
