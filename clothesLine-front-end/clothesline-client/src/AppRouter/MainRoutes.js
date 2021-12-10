import React, { useState } from "react";
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
import Sales from "../Sales/Sales";
import Cart from "../Cart/Cart";

const MainRoutes = ({
  currentUser,
  setAuthentication,
  authentication,
  setCurrentUser,
}) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar
        authentication={authentication}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setSearch={setSearch}
        setAuthentication={setAuthentication}
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/signin"
            element={
              <Signup
                setCurrentUser={setCurrentUser}
                setAuthentication={setAuthentication}
              />
            }
          />
          <Route path="/item/:id" element={<Cards />} />
          <Route
            path="/signup"
            element={
              <NewSignup
                setCurrentUser={setCurrentUser}
                setAuthentication={setAuthentication}
              />
            }
          />
          <Route path="category/:id" element={<SortCategories />}></Route>
          <Route path="/row" element={<Row currentUser={currentUser} />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};
export default MainRoutes;
