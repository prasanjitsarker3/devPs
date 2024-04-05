import React, { useEffect, useRef } from "react";
import "./About.css";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="">
      <div data-aos="fade-right" data-aos-duration="1000" className=" pb-3">
        <h1 className=" text-4xl font-bold fontPop text-[#009975]">About Me</h1>
      </div>{" "}
      {/* <hr className="border-t-2 border-[#A4B0BD] w-full" /> */}
      <div className="w-full md:flex md:flex-row md:justify-around  flex-col justify-around item-center gap-8 pb-8 pt-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" md:w-1/2 fontPop space-y-4 bg-white p-5"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-2xl font-semibold text-[#009975]"
          >
            Work Experience
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-justify text-md font-semibold"
          >
            A Passionate Tech Enthusiast Who Constantly Seek Knowledge. I love
            to build amazing web products!
          </p>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1> Front End Developer (React JS, Redux) Onsite Internship.</h1>
            <h1> Digicon Technologies Ltd, (Mirpur-12, Dhaka)</h1>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-justify text-[#47535E]"
          >
            {" "}
            During my internship, I worked with my team to create the BREB Web
            CRMS (Customer Relationship Management System), which uses React.js
            and Redux on the client side. This project required developing seven
            layout panels, implementing nested routing functionalities, and
            creating many bespoke components.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" md:w-1/2 fontPop space-y-4 bg-white p-5"
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-2xl text-[#009975] font-semibold"
          >
            Education Background
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" space-y-2"
          >
            <p className=" font-semibold">
              University: Haldia Institute of Technology, WB-India
            </p>
            <p className=" font-semibold">Department:Information Technology</p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-justify text-[#47535E] text-md"
          >
            I have completed my Bachelor of Technology (B.Tech) in Information
            Technology from HIT University with a CGPA of 8.60 out of 10. My
            final year project was a Twitter sentiment analysis, and my training
            project was focused on university management. I have a good command
            over programming languages such as JavaScript, Java, and database
            management systems (DBMS).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
