import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "../../CommonSection/NavbarSection";
import Footer from "../FrontPage/Footer";

const Main = () => {
  return (
    <div className=" bg-[#F3F5F5]">
      <NavbarSection />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
