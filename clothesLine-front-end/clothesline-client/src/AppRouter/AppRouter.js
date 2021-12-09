import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import LoggedOut from "./LoggedOut";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          console.log(user)
          setAuthentication(true);
          console.log(authentication)
        });
      }
    });
  }, []);

  // if (!authentication) {
  //   return <div></div>;
  // }

  return (
    <>
      <Router>
        {authentication ? <MainRoutes currentUser={currentUser} setAuthentication={setAuthentication} authentication={authentication} setCurrentUser={setCurrentUser} /> : <LoggedOut authentication={authentication} setCurrentUser={setCurrentUser} />} 
      </Router>
    </>
  );
};

export default AppRouter;
