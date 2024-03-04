import { Button, Chip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(id);
  useEffect(() => {
    if (data && id) {
      const detailData = data.filter((item) => item.id == id);
      setDetails(detailData);
    }
  }, [data, id]);
  const viewData = details[0];
  return (
    <div className="md:px-20 px-8 space-y-5">
      <div className=" grid md:grid-cols-3 w-full   pt-8">
        {details[0]?.allImage.map((item) => (
          <img
            key={item?.id}
            className="h-full shadow-xl"
            src={item?.img}
            alt=""
            srcset=""
          />
        ))}
      </div>
      <h1 className=" fontPop text-2xl ">{viewData?.name}</h1>
      <div className="flex flex-wrap gap-2">
        <a href={viewData?.clientCode} target="_blank">
          <Button size="sm" color="blue">
            Client Code
          </Button>
        </a>
        {viewData?.serverCode && (
          <a href={viewData?.serverCode} target="_blank">
            <Button size="sm" color="blue">
              Server Code
            </Button>
          </a>
        )}

        <a href={viewData?.live} target="_blank">
          <Button size="sm" color="blue">
            Live Link
          </Button>
        </a>
      </div>
      <p className=" fontPop text-lg">{viewData?.details}</p>
      <div className="flex flex-wrap gap-3 sm:gap-2 md:gap-3">
        <h1 className="fontPop text-xl font-semibold">Technology: </h1>
        {viewData?.technologies.map((item, index) => (
          <Chip
            key={index}
            variant="ghost"
            value={item}
            className="rounded-full"
          />
        ))}
      </div>
      <div>
        <Link to="/">
          <Button
            className=" w-[130px]"
            size="sm"
            color="blue"
            variant="outlined"
          >
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
