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
    <div className=" bg-gray-50 py-5">
      <h1 className=" text-2xl fontPop font-serif font-semibold">
        Projects...
      </h1>
      <div className=" grid md:grid-cols-2 gap-7 justify-center items-center w-full">
        {data.map((item) => (
          <Card key={item.id} className="mt-6 w-96 mx-auto">
            <CardHeader color="blue-gray" className="relative h-48">
              <img src={item.image} alt="card-image" className="h-full" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.name}
              </Typography>

              <Typography className=" text-justify">
                {item.title.slice(0, 128)}...
              </Typography>
            </CardBody>
            <Link to={`/details/${item.id}`} className="p-0 m-0 mb-5 w-full  ">
              <Button
                variant="outlined"
                className="mx-auto flex justify-center"
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
