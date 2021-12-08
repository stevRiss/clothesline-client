import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Home from "../Home/Home";
import Signup from "../signup/Signup";
import "./mainScreen.css";
import CardList from "../CardList/CardList";
import Row from "../Row/Row";
import NewSignup from "../NewSignup/NewSignup";

const MainRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/item" element={<CardList />} />
          <Route path="/row" element={<Row />} />
          <Route path="/signup" element={<NewSignup />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
