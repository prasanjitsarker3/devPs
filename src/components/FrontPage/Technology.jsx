import React from "react";

const Technology = () => {
  return (
    <div id="technology" className=" w-full py-12">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" space-y-1 pb-5"
      >
        <h1 className=" fontPop text-3xl font-semibold text-[#009975]">
          Technologies
        </h1>
        <p className=" fontPop text-lg">
          I've worked with a range of technologies in the web development world.
          From design to backend.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 w-full py-5">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/919/919851.png"
            alt=""
          />
          <h1 className=" text-xl ">Front-End Development</h1>
          <h1 className="md:text-md text-justify">
            Html, CSS, Bootstrap, Tailwind, Javascript, React JS,Next JS, Redux,
            Redux RTK Query, React-router, MaterialUI, Chakra UI etc.
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/1104/1104982.png"
            alt=""
          />
          <h1 className=" text-xl ">Backend Development</h1>
          <h1 className="md:text-md text-justify">
            Node.js, MongoDb,Mongoose,Prisma
          </h1>
          <h1 className="md:text-md text-justify">
            PostgreSQL,Prisma,Docker, JWT.
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/4205/4205106.png"
            alt=""
          />
          <h1 className=" text-xl">Fullstack Development</h1>
          <h1 className=" text-md text-justify">
            Experience with The React framework for production NextJS
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/3419/3419250.png"
            alt=""
          />
          <h1 className=" text-xl">Design</h1>
          <h1 className=" text-md text-justify">
            Experience with Tools like Figma, Adobe PhotoShop, Adobe XD etc.
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/1713/1713986.png"
            alt=""
          />
          <h1 className=" text-xl">Tools</h1>
          <h1 className=" text-md ">
            Tools like Axios, TanStack Query, Heroku, Netlify,Vercel, Firebase,
            Git, Github, Gitlab, Jira, Slack etc.
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" fontPop space-y-2 bg-white w-full mx-auto p-5 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-[#009975] hover:text-white cursor-pointer"
        >
          <img
            className=" h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/2111/2111628.png"
            alt=""
          />
          <h1 className=" text-xl">Still Learning</h1>
          <h1 className=" text-md text-justify">
            Exploring at free time GraphQL, Gatsby, Apollo, Golang, MySql, React
            Native
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Technology;
