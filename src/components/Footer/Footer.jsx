import { Typography } from "@material-tailwind/react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="container mx-auto w-full bg-white p-8">
      <hr />
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo-footer"
            className="w-32"
            onClick={handleClick}
          />
        </Link>
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 STORE. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
