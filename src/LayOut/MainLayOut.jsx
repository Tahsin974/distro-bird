import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </div>
  );
};

export default MainLayOut;
