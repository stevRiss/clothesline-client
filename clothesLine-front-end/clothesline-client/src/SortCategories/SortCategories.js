import React, { useState, useEffect } from "react";
import Row from "../Row/Row";
import "./sortCategory.css";

const SortCategories = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items);

  const values = items.filter(
    (data) => data.name === category && data.items.length >= 1
  );
  const newArr = values.map((data) => data.items.map((item) => item));
  console.log(newArr);
  return (
    <div className="items">
      {newArr.map((item) => {
        return item.map((item_1) => <Row key={item_1.id} item={item_1}></Row>);
      })}
    </div>
  );
};

export default SortCategories;
