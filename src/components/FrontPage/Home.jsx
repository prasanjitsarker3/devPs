import React from "react";
import Banner from "./Banner";
import About from "../About/About";
import Project from "../Project/Project";

const Home = () => {
  return (
    <div className=" px-12">
      <Banner />
      <About></About>
      <Project />
    </div>
  );
};

export default Home;
