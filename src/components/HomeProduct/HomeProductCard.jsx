import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/addToCartSlice";

const HomeProductCard = ({
  item,
  id,
  img,
  name,
  text,
  type,
  size,
  color,
  gender,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const indexColor = color[0];
  const indexSize = size[0];

  return (
    <Card className="aspect-square">
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
              <span className="text-red-600">Size Left:&nbsp;&nbsp; </span>
              {indexSize}
            </div>
          </div>
          <div color="blue-gray" className="font-medium opacity-95">
            <div className="flex items-center">
              <span className="text-red-600">Color Left:&nbsp;&nbsp; </span>
              <div
                className="mt-[1px] h-[12px] w-[12px] rounded-full"
                style={{ backgroundColor: item.color[0] }}
              ></div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none transition-all duration-300 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                img: img,
                name: name,
                text: text,
                type: type,
                size: indexSize,
                color: indexColor,
                gender: gender,
                price: price,
                amount: 1,
                totalPrice: totalPrice,
              })
            )
          }
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomeProductCard;
