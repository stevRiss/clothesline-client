import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Home from "../Home/Home";
import Signup from "../signup/Signup";
import "./mainScreen.css";
import CardList from "../CardList/CardList";
import Row from "../Row/Row";

const MainRoutes = () => {
  const [currentUser, setCurrentUser] = useState("");

  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          setAuthentication(true);
        });
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/item" element={<CardList />} />
          <Route path="/row" element={<Row />} />
          <Route path="/row" element={<Row />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
