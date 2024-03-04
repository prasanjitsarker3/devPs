import { Button, Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import React from "react";
import animation from "../../../public/Animation - 1703837380009.json";
import nodejs from "../../assets/nodejs-icon.svg";
import mongodb from "../../assets/mongodb-original.svg";
import { TypeAnimation } from "react-type-animation";
import { FaDev, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className=" flex-wrap md:flex w-full md:h-[90vh] justify-center items-center mx-auto ">
        <div className="lg:w-1/2 w-full space-y-3 md:pt-0 pt-10">
          <Typography className="fontPop font-medium md:text-4xl text-3xl">
            Hi,I'm Prasanjit Sarker
          </Typography>
          <div className="py-2  md:text-4xl text-3xl font-serif">
            <TypeAnimation
              sequence={[
                "Mern Stack Developer",
                1000,
                "Font-End Wev Developer",
                1000,
              ]}
              className="py-5 "
              repeat={Infinity}
            />
          </div>
          <Typography className="md:text-lg text-md font-normal fontPop text-justify">
            As a dedicated and ambitious B.Tech. student specializing in
            information technology, I am extremely interested in technology and
            problem-solving, am committed to excelling in the IT field, and hope
            to make a significant contribution by providing creative solutions.
          </Typography>
          <div className=" flex gap-3 py-3">
            <div className="bg-blue-gray-100 p-2 inline-block rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white">
              <FaGithub className="h-6 w-6" />
            </div>
            <div className="bg-blue-gray-100 text-blue-700 p-2 inline-block rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white">
              <FaFacebook className="h-6 w-6" />
            </div>
            <div className="bg-blue-gray-100 text-blue-700 p-2 inline-block rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white">
              <FaLinkedin className="h-6 w-6" />
            </div>
            <div className="bg-blue-gray-100 p-2 inline-block rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white">
              <FaDev className="h-6 w-6" />
            </div>
          </div>
          <div className=" flex gap-3">
            <button class="shadow__btn">Hire Me</button>
            <div className=" cursor-pointer">
              <div class="button">
                <div class="button-wrapper">
                  <div class="text">Download Resume</div>
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="2em"
                      height="2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center w-full">
          <div className="p-5 relative">
            <Lottie
              className="w-full h-full rounded-full"
              animationData={animation}
              loop={true}
            />
            <img
              className="h-6 w-6 mx-auto md:-mt-12 -mt-8 animate-bobbing"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
              alt=""
            />
            <img
              className="h-8 w-8 absolute top-0 right-3/4 -mr-20 md:mt-14 mt-8 animate-bobbing"
              src="https://cdn-icons-png.flaticon.com/128/2351/2351891.png"
              alt=""
            />
            <img
              className="h-7 w-7 absolute md:ml-12 ml-7 top-1/4 animate-bobbing"
              src={nodejs}
              alt=""
            />
            <img
              className="h-9 w-9 absolute top-2/4 animate-bobbing"
              src={mongodb}
              alt=""
            />
            <img
              className="h-6 w-6 absolute top-1/4 right-0 md:mr-16 mr-12 md:mt-3 mt-1 animate-bobbing"
              src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
