import React, { useEffect } from "react";
import Banner from "./Banner";
import About from "../About/About";
import Project from "../Project/Project";
import Technology from "./Technology";
import Accomplishment from "./Accomplishment";
import Contract from "./Contract";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className=" px-12">
      <Banner />
      <About></About>
      <Project />
      <Technology />
      <Accomplishment />
      <Contract />
    </div>
  );
};

export default Home;
