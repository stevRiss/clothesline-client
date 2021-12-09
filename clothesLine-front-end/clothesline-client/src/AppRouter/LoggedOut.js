import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import NewSignup from "../NewSignup/NewSignup";
import Signup from "../signup/Signup";
import Home from "../Home/Home";


const LoggedOut = ({setCurrentUser,setAuthentication, authentication}) => {

    return (

        <div>
             <NavBar authentication={authentication} setCurrentUser={setCurrentUser}/>
             <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/signin" element={<Signup setAuthentication={setAuthentication} setCurrentUser={setCurrentUser} />}></Route>
                <Route path="/signup" element={<NewSignup setAuthentication={setAuthentication} setCurrentUser={setCurrentUser} />} />

             </Routes>
        </div>
    )
}

export default LoggedOut;