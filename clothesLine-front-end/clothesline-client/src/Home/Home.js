import React, { useState, useEffect } from "react";
import Row from "../Row/Row.js";
import "./home.css";
// import "./row.css";

const Home = ({currentUser}) => {
  const [items, setItems] = useState([]);

  // const [view, setView] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        // console.log(currentUser);
      });
  }, []);
  return (
    <div className="items">
      {items.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
