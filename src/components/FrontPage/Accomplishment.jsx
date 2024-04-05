import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Accomplishment = () => {
  const [count, setCount] = useState(false);

  return (
    <div className=" py-8">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" fontPop text-3xl font-semibold text-[#009975]"
      >
        Personal Accomplishments
      </h1>
      <div className=" grid md:grid-cols-4 gap-5 py-12">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="fontPop p-2 h-32 flex flex-col justify-center cursor-pointer items-center text-white bg-[#47535E] transition-all duration-500 ease-in-out hover:bg-white hover:text-black rounded-md shadow-md"
        >
          {/* <h1 className="text-3xl font-semibold">15 +</h1> */}
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-3xl font-semibold">
              {count && <CountUp start={0} end={15} duration={3} delay={0} />} +
            </h1>
          </ScrollTrigger>
          <p className="text-xl">Projects</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="fontPop p-2 h-32 flex flex-col justify-center cursor-pointer items-center text-white bg-[#47535E] transition-all duration-500 ease-in-out hover:bg-white hover:text-black rounded-md shadow-md"
        >
          {/* <h1 className="text-3xl font-semibold">10 +</h1> */}
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-3xl font-semibold">
              {count && <CountUp start={0} end={10} duration={3} delay={0} />} +
            </h1>
          </ScrollTrigger>
          <p className="text-xl">Github Followers</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="fontPop p-2 h-32 flex flex-col justify-center cursor-pointer items-center text-white bg-[#47535E] transition-all duration-500 ease-in-out hover:bg-white hover:text-black rounded-md shadow-md"
        >
          {/* <h1 className="text-3xl font-semibold">2 +</h1> */}
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-3xl font-semibold">
              {count && <CountUp start={0} end={3} duration={3} delay={0} />} +
            </h1>
          </ScrollTrigger>
          <p className="text-xl">Years of Coding Experience</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="fontPop p-2 h-32 flex flex-col justify-center cursor-pointer items-center text-white bg-[#47535E] transition-all duration-500 ease-in-out hover:bg-white hover:text-black rounded-md shadow-md"
        >
          {/* <h1 className="text-3xl font-semibold">50 +</h1> */}
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <h1 className="text-3xl font-semibold">
              {count && <CountUp start={0} end={50} duration={3} delay={0} />} +
            </h1>
          </ScrollTrigger>
          <div>
            <p className="text-xl">Problem Solved</p>
            <p className="text-xl">LeetCode-HackerRank</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishment;
