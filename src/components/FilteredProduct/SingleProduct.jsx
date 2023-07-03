import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Footer from "../Footer/Footer";
import { addToCart } from "../../features/slices/addToCartSlice";
import AlertDOM from "../Alert/AlertDOM";

const SingleProduct = () => {
  const { type } = useParams();
  const singleProduct = useSelector((state) => state.products.product);
  console.log(singleProduct);
  const singleProductSize = singleProduct?.size ? singleProduct.size[0] : "";
  const singleProductColor = singleProduct?.color[0];
  const [color, setColor] = useState(singleProductColor);
  const [size, setSize] = useState(singleProductSize);
  const dispatch = useDispatch();

  return (
    <section id={`singleProduct:${type}`} className="container mx-auto p-4">
      <div
        key={singleProduct.id}
        className="flex flex-col items-center justify-around gap-8 py-10 md:flex-row"
      >
        <div>
          <img
            src={singleProduct.img}
            alt={singleProduct.name}
            className=" max-h-[850px] rounded-lg"
          />
        </div>

        <div className="max-w-lg space-y-4">
          {/* heading and text  */}
          <h5 className="font-inter text-2xl font-bold leading-none tracking-normal text-black">
            {singleProduct.name}
          </h5>
          <p className="font-inter text-xl font-bold leading-none tracking-normal text-orange-600">
            15% OFF
          </p>
          <p className="font-inter text-base font-bold leading-6 tracking-normal text-gray-600 md:text-xl">
            {singleProduct.text}
          </p>

          {/* select size  */}
          {type === "Bags" ? null : (
            <div className="">
              <label
                htmlFor="size"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Pick a size
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {singleProduct.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* select color  */}
          <div className="">
            <label
              htmlFor="color"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Pick a color
            </label>
            <select
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              {singleProduct.color.map((color, index) => (
                <option key={index} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* add to cart  */}
          <Button
            className="border border-gray-900/30 bg-transparent text-gray-900  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            ripple={true}
            onClick={() =>
              dispatch(
                addToCart({
                  id: singleProduct.id,
                  img: singleProduct.img,
                  name: singleProduct.name,
                  text: singleProduct.text,
                  type: singleProduct.type,
                  size: size,
                  color: color,
                  gender: singleProduct.gender,
                  price: singleProduct.price,
                  amount: 1,
                  totalPrice: singleProduct.price,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* footer  */}
      <Footer />

      {/* alert dom */}
      <AlertDOM />
    </section>
  );
};

export default SingleProduct;
