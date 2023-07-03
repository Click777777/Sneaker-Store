import React from "react";
import { storeData } from "../../assets/data/dummyData";
import HomeProductCard from "./HomeProductCard";

const HomeProduct = () => {
  return (
    <section id="promotion">
      <div className="mx-auto w-[100%] bg-black p-2 py-3 text-center">
        <h3 className="font-inter text-base font-bold uppercase leading-none tracking-normal text-red-500 md:text-lg">
          summer t-shirt sale 30%
        </h3>
      </div>

      <div className="mx-auto mb-10 grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {storeData.slice(0, 6).map((item) => (
          <div key={item.id}>
            <HomeProductCard
              item={item}
              id={item.id}
              img={item.img}
              name={item.name}
              text={item.text}
              type={item.type}
              size={item.size[0]}
              color={item.color}
              gender={item.gender}
              price={item.price}
              totalPrice={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProduct;
