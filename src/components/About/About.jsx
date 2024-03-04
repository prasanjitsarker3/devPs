import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold pb-5">About Me</h1>
      <div className="w-full md:flex md:flex-row md:justify-around md:items-center flex-col justify-around items-center gap-8 pb-5">
        <div className=" md:w-1/2 fontPop space-y-3">
          <h2 className=" text-2xl font-semibold">Work Experience</h2>
          <p className=" text-justify text-gray-900">
            A Passionate Tech Enthusiast Who Constantly Seek Knowledge. I love
            to build amazing web products!
          </p>
          <div>
            <h1> Front End Developer (React JS, Redux) Onsite Internship.</h1>
            <h1> Digicon Technologies Ltd, (Mirpur-12, Dhaka)</h1>
          </div>
          <p className=" text-justify">
            {" "}
            During my internship, I developed the BREB Web CRMS (Customer
            Relationship Management System) utilizing React.js and Redux on the
            client side. This project involved designing seven layout panels,
            implementing nested routing functionalities, and creating multiple
            custom components.
          </p>
        </div>
        <div className=" md:w-1/2 fontPop space-y-3">
          <h1 className=" text-2xl font-semibold">Education Background</h1>
          <p>University: Haldia Institute of Technology, WB-India</p>
          <p>Department:Information Technology</p>
          <p className=" text-justify">
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
