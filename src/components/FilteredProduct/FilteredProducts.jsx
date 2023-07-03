import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import UniqueItem from "../customHook/UniqueItem";
import UniqueSize from "../customHook/UniqueSize";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  filterByColor,
  filterByGender,
  filterBySize,
  filterProducts,
  sortByPrice,
} from "../../features/slices/productSlice";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";

const FilteredProducts = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.products.products);
  const dataFilter = useSelector((state) => state);
  const error = useSelector((state) => state.products.error);
  // console.log(dataFilter);

  const { data: uniqueColor } = UniqueItem(dataFilter.products.products);

  const { data: uniqueSize } = UniqueSize(dataFilter.products.products);

  const genderButtons = ["male", "female"];

  return (
    <section id={type} className="w-full">
      <div className="pt-2">
        {/* title  */}
        <h3 className="py-8 text-center font-inter text-4xl font-bold leading-none tracking-normal text-gray-500">
          {type}
        </h3>

        {/* sorting process */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-y-4 px-8">
          <div className="hide-scrollbar flex items-center gap-y-4 overflow-x-scroll">
            {/* gender  */}
            {genderButtons.map((item, index) => {
              return (
                <div key={index}>
                  <Button
                    color="gray"
                    size="md"
                    variant="outlined"
                    ripple={true}
                    className="mr-4 w-max py-2 font-medium text-black duration-300 ease-in-out hover:bg-gray-300"
                    onClick={() => dispatch(filterByGender(item))}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}

            {/* price  */}
            <div className="">
              <Button
                color="gray"
                size="md"
                variant="outlined"
                ripple={true}
                className="mr-4 w-max py-2 font-medium text-black duration-300 ease-in-out hover:bg-gray-300"
                onClick={() => dispatch(sortByPrice())}
              >
                Price (High to Low)
              </Button>
            </div>

            {/* color  */}
            <div className="mr-4">
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Button
                    ripple={true}
                    color="gray"
                    size="md"
                    className="w-max py-2 font-medium text-black"
                    variant="outlined"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {uniqueColor?.map((color, index) => (
                    <MenuItem
                      key={index}
                      style={{ color: color }}
                      onClick={() => dispatch(filterByColor(color))}
                    >
                      {color.toUpperCase()}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>

            {/* size  */}
            <div className="mr-4">
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Button
                    disabled={type === "Bags"}
                    ripple={true}
                    color="gray"
                    size="md"
                    className="w-max py-2 font-medium text-black"
                    variant="outlined"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {uniqueSize?.map((size, index) => (
                    <MenuItem
                      onClick={() => dispatch(filterBySize(size))}
                      key={index}
                    >
                      {type === "Bags" ? null : size.toUpperCase()}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
          </div>

          {/* clear sorting */}
          <div>
            <Button
              color="gray"
              size="md"
              variant="outlined"
              ripple={true}
              className="mr-4 w-max py-2 font-medium text-black duration-300 ease-in-out hover:bg-gray-300"
              onClick={() => dispatch(filterProducts(type))}
            >
              Clear Filter
            </Button>
          </div>
        </div>

        {error ? (
          <Error />
        ) : (
          <div className="mx-auto mb-10 grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.map((item) => (
              <div key={item.id}>
                <ProductCard
                  item={item}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        )}

        {/* footer  */}
        <Footer />
      </div>
    </section>
  );
};

export default FilteredProducts;
