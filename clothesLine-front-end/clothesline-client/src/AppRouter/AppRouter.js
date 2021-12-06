import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const AppRouter = () => {
  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  );
};

export default AppRouter;
