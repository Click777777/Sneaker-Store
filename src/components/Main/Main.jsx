import React from "react";
import Navbar from "../NavBar/Navbar";
import Slider from "../Slider/Slider";
import FilterButton from "../FilterButton/FilterButton";
import HomeProduct from "../HomeProduct/HomeProduct";
import Footer from "../Footer/Footer";
import AlertDOM from "../Alert/AlertDOM";

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <Slider />
      <FilterButton />
      <HomeProduct />
      <Footer />
      <AlertDOM />
    </div>
  );
};

export default Main;
