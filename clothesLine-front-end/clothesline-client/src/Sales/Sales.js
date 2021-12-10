import React, { useState, useEffect } from "react";
import RowSales from "./RowSales";

const Sales = () => {
  const [items, setItems] = useState([]);
  // const [view, setView] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);

  console.log(items);
  return (
    <div className="items">
      {items.map((item) => (
        <RowSales key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sales;
