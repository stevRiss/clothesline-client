import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Home from "../Home/Home";
import Signup from "../signup/Signup";

const MainRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signup />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
