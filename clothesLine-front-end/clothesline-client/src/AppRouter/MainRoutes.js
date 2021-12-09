import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Home from "../Home/Home";
import Signup from "../signup/Signup";
import "./mainScreen.css";
import CardList from "../CardList/CardList";
import Cards from "../CardList/Cards";
import Row from "../Row/Row";
import SortCategories from "../SortCategories/SortCategories";
import NewSignup from "../NewSignup/NewSignup";

const MainRoutes = ({
  currentUser,
  setAuthentication,
  authentication,
  setCurrentUser,
}) => {

  const [view, setView] = useState([]);
  const [category, setCategory] = useState("");
  const handleCategory = () => {
    return category;
  };

  return (
    <>
      <NavBar
        authentication={authentication}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setAuthentication={setAuthentication}
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/signin"
            element={<Signup setCurrentUser={setCurrentUser} setAuthentication={setAuthentication} />}
          ></Route>
          <Route
            path="/item"
            element={<Cards currentUser={currentUser} view={view} />}
          />
          <Route
            path="/signup"
            element={<NewSignup setCurrentUser={setCurrentUser} setAuthentication={setAuthentication} />}
          />
          <Route
            path="/row"
            element={<Row currentUser={currentUser} setView={setView} />}
          />
        </Routes>
      </div>
    </>
  );
};
export default MainRoutes;
