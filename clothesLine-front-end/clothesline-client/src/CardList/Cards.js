import React, { useEffect, useState } from "react";
import "./cards.css";
import "../NavBar/navbar.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const Cards = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  // const [view, setView] = useState([]);
  const handleReturn = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  console.log(id);
  // console.log(item);

  const filterItem = item.filter((item) => item.id === Number(id));

  return (
    <>
      {filterItem.map((item) => (
        <div className="container" key={item.id}>
          <div className="col-md-12">
            <section className="panel">
              <div className="panel-body">
                <div className="col-md-6">
                  <div className="pro-img-details">
                    <img className="image-item" src={item.image} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="pro-d-title">
                    <h1 className="">{item.name}</h1>
                  </h4>
                  <p>
                    Praesent ac condimentum felis. Nulla at nisl orci, at
                    dignissim dolor, The best product descriptions address your
                    ideal buyer directly and personally. The best product
                    descriptions address your ideal buyer directly and
                    personally.
                  </p>

                  <div className="m-bot15">
                    {" "}
                    <strong>Price : </strong>{" "}
                    <span className="pro-price">{`$${item.price}`}</span>
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

                    <button
                      className="btn-sign-return"
                      type="button"
                      onClick={handleReturn}
                    >
                      Return
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
      ))}
    </>
  );
};

export default Cards;
