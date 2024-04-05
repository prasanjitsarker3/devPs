import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div id="project" className="py-5 max-w-full ">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" text-2xl fontPop font-serif font-bold pb-8 text-[#009975]"
      >
        Projects...
      </h1>
      <div className=" grid md:grid-cols-2 gap-7 mx-auto  justify-evenly">
        {data.map((item) => (
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            key={item.id}
            className="mt-6 md:w-96 w-full mx-auto"
          >
            <CardHeader color="blue-gray" className="relative h-60">
              <img src={item.image} alt="card-image" className="h-full" />
            </CardHeader>
            <CardBody className=" mb-0 pb-3 ">
              <Typography
                color="blue-gray"
                className=" text-lg font-medium text-[#009975]"
              >
                {item.name}
              </Typography>

              <Typography className=" text-justify">
                {item.title.slice(0, 84)}...
              </Typography>
            </CardBody>
            <Link
              to={`/details/${item.id}`}
              className="p-0 m-0 mb-5 w-full px-12 "
            >
              <Button
                variant="outlined"
                color="blue"
                className="mx-auto flex justify-center w-full "
              >
                See Details
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
