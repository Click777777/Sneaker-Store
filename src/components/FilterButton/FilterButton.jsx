import React from "react";
import clothes from "../../assets/images/clothes.jpeg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productSlice";

const FilterButton = () => {
  const dispatch = useDispatch();

  const dataForFilter = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  return (
    <section id="filterAndBanner">
      {/* filter button  */}
      <div className=" hide-scrollbar flex w-full items-center justify-center gap-4 overflow-x-auto py-4 md:py-8">
        {dataForFilter.map((data, index) => (
          <div key={index}>
            <Link to={`/filteredProduct/${data}`}>
              <Button
                variant="outlined"
                size="md"
                color="gray"
                ripple={true}
                className="w-max text-black duration-300 ease-in-out hover:bg-gray-300"
                onClick={() => dispatch(filterProducts(data))}
              >
                {data}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* text  */}
      <div className="mx-auto w-[100%] bg-black p-2 py-3 text-center">
        <h3 className="font-inter text-base font-bold uppercase leading-none tracking-normal text-red-500 md:text-lg">
          sales up to 50%
        </h3>
      </div>

      {/* image  */}
      <div className="mb-10 pt-6">
        <img
          src={clothes}
          alt="clothesImg"
          className="mx-auto max-h-[600px] w-[90%] rounded-lg shadow-lg shadow-gray-500 md:w-3/4"
        />
      </div>
    </section>
  );
};

export default FilterButton;
