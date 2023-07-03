import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const sliderValue = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <section id="hero" className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === sliderValue
                ? "scale-100 opacity-100 duration-700 ease-in-out"
                : "scale-95 opacity-0 duration-700 ease-in-out"
            }
          >
            {/* image  */}
            <div>
              {parseInt(item.id) === sliderValue && (
                <img
                  src={item.img}
                  alt="heroImg"
                  className="aspect-video w-full"
                />
              )}
            </div>

            {/* text  */}
            <div className="absolute left-1/2 top-[10%]  max-w-max -translate-x-1/2">
              <p className="font-inter text-base font-bold leading-none tracking-normal text-white md:text-4xl">
                {parseInt(item.id) === sliderValue && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* slider DOT for navigation */}
      <div className="absolute bottom-12 left-[50%] -translate-x-[50%]">
        <div className="flex items-center gap-[14px]">
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={
                sliderValue === index + 1
                  ? "h-3 w-3 cursor-pointer  rounded-full bg-red-700"
                  : "h-2 w-2 cursor-pointer rounded-full bg-white"
              }
              onClick={() => dispatch(dotSlide(index + 1))}
            ></div>
          ))}
        </div>
      </div>

      {/* prev and next  */}
      <button
        className="group absolute left-4 top-1/2 rounded-full bg-white p-2 duration-500 ease-in-out hover:bg-red-500"
        onClick={() => dispatch(prevSlide(sliderValue - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 duration-500 ease-in-out group-hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="group absolute right-4 top-1/2 rounded-full bg-white p-2 duration-500 ease-in-out hover:bg-red-500"
        onClick={() => dispatch(nextSlide(sliderValue + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 duration-500 ease-in-out group-hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Slider;
