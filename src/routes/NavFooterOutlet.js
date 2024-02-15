import React from "react";
import NavBar from "../layouts/NavBar/NavBar.js";
import Footer from "../layouts/Footer/Footer.js";
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;