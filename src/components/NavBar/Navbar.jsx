import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import DialogBox from "../DialogBox/DialogBox";
import NameAvatar from "../Auth/NameAvatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.addToCartSlice.totalAmount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      {/* banner  */}
      <div className="w-full bg-black p-4">
        <h3 className="text-center font-inter text-2xl font-bold capitalize leading-none tracking-normal text-white">
          welcome to the store
        </h3>
      </div>

      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="headerImg"
              className="h-28"
              onClick={handleClick}
            />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-8">
          {/* shopping bag */}
          <div
            className="flex cursor-pointer items-center"
            onClick={handleOpen}
          >
            {/* show how many item is added */}
            <button type="button" className="relative p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {totalAmount > 0 && (
                <div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900">
                  {totalAmount}
                </div>
              )}
            </button>

            <p className="sr-only ml-2 font-inter text-base font-medium capitalize leading-none tracking-normal md:not-sr-only">
              shopping bag
            </p>

            {/* dialog box  */}
            {open && (
              <DialogBox openModal={open} setOpen={setOpen} opened={open} />
            )}
          </div>

          {/* name and profile avatar  */}
          <NameAvatar />
        </div>
      </div>

      {/* Banner promotion */}
      <div className="flex flex-wrap items-center justify-around bg-black p-4">
        <p className="p-2 font-inter text-base font-medium leading-none tracking-normal text-white">
          50% OFF
        </p>
        <p className="p-2 font-inter text-base font-medium leading-none tracking-normal text-white">
          Free shipping and returns
        </p>
        <p className="p-2 font-inter text-base font-medium leading-none tracking-normal text-white">
          Different payment methods
        </p>
      </div>
    </header>
  );
};

export default Navbar;
