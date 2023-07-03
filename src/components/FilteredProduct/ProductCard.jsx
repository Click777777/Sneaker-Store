import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productSlice";

const ProductCard = ({ item, id, img, name, price, text }) => {
  const { type } = useParams();
  const dispatch = useDispatch();

  return (
    <Link to={`/filteredProduct/${type}/${id}`}>
      <Card
        className="aspect-square"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader shadow={false} floated={false} className="aspect-square">
          <img src={img} alt={name} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody className="flex flex-col gap-y-1">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              $ {price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {text}
          </Typography>

          <div className="mb-2 flex items-center justify-between">
            <div color="blue-gray" className="font-medium opacity-95">
              <div className="flex">
                <span className="">Size:&nbsp;&nbsp; </span>
                {type === "Bags" ? "No Size" : item.size.join(", ")}
              </div>
            </div>
            <div color="blue-gray" className="font-medium opacity-95">
              <div className="flex items-center">
                <span className="">Color:&nbsp;&nbsp; </span>
                <div className="flex gap-x-3">
                  {item.color.map((color, index) => (
                    <div
                      key={index}
                      className="mt-[1px] h-[12px] w-[12px] rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
