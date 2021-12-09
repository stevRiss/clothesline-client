import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import LoggedOut from "./LoggedOut";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          if (user) {
            setCurrentUser(user);
          } else {
            console.log("no user");
          }

          // console.log(setCurrentUser)
          // setAuthentication(true);
          // console.log(authentication)
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
        {authentication ? (
          <MainRoutes
            currentUser={currentUser}
            setAuthentication={setAuthentication}
            authentication={authentication}
            setCurrentUser={setCurrentUser}
          />
        ) : (
          <LoggedOut
            authentication={authentication}
            setCurrentUser={setCurrentUser}
            setAuthentication={setAuthentication}
          />
        )}
      </Router>
    </>
  );
};

export default AppRouter;
