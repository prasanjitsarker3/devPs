import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "../../CommonSection/NavbarSection";

const Main = () => {
  return (
    <div>
      <NavbarSection />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
