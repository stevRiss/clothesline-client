import React, { useState, useEffect } from 'react';
import Row from "../Row/Row.js";
import "./home.css"
// import "./row.css";


const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(r => r.json())
    .then(data => {
      setItems(data)
      console.log(data)
    })
  }, [])
  return (
    <div class='items'>
      <h1>{items.map(item => <Row key= {item.id} item={item} />)}</h1>
    </div>
  );
};

export default Home;
