import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  reduceCart,
  removeFromCart,
} from "../../features/slices/addToCartSlice";
import { Link } from "react-router-dom";
import { singleProduct } from "../../features/slices/productSlice";

const DialogBox = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.addToCartSlice.cart);
  const totalPrice = useSelector((state) => state.addToCartSlice.totalPrice);
  const dispatch = useDispatch();

  console.log(useSelector((state) => state.products));
  console.log("cart", cart);

  return (
    <div className="">
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            size="lg"
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="flex items-center justify-between">
              <DialogHeader>Shopping Bag</DialogHeader>
            </div>
            <DialogBody
              divider
              className="max-h-[500px] w-full overflow-y-scroll"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index} className="border-b border-gray-300">
                    <div className=" grid grid-cols-2 content-center py-8 md:grid-cols-3">
                      <div className="col-span-1 md:col-span-2">
                        <Link
                          to={`/filteredProduct/${item.type}/${item.id}`}
                          onClick={() => dispatch(singleProduct(item.id))}
                        >
                          <img
                            className="h-[125px] rounded-md"
                            src={item.img}
                            alt={item.name}
                          ></img>
                        </Link>
                        <div className="flex flex-col items-start">
                          <h4 className="pt-2 font-inter text-base font-bold leading-none tracking-normal text-black">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="pt-2 font-inter text-xs leading-none tracking-normal text-black">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-1 flex flex-col justify-around">
                        <p className="pt-2 font-inter text-sm leading-none tracking-normal text-black">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="pt-2 font-inter text-sm leading-none tracking-normal text-black">
                          Selected color:{" "}
                          <span>
                            <span
                              className="ml-2 rounded-full px-2"
                              style={{ backgroundColor: item.color }}
                            ></span>
                            <span>&nbsp;&nbsp;(&nbsp;{item.color}&nbsp;)</span>
                          </span>
                        </p>
                        <p className="pt-2 font-inter text-sm leading-none tracking-normal text-black">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="pt-2 font-inter text-sm leading-none tracking-normal text-black">
                          Single Item Price:{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="pt-2 font-inter text-sm leading-none tracking-normal text-black">
                          Total Item Prices:{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="space-x-2 pt-4">
                          {/* add item  */}
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(addToCart(item))}
                              size="sm"
                              color="blue-gray"
                              ripple={true}
                              variant="outlined"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-3 w-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </Button>
                          </Tooltip>

                          {/* reduce item  */}
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(reduceCart(item))}
                              size="sm"
                              color="blue-gray"
                              ripple={true}
                              variant="outlined"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-3 w-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </Button>
                          </Tooltip>

                          {/* remove item  */}
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>

            <DialogFooter className="flex items-center justify-between">
              <p className="pt-2 font-inter text-base leading-none tracking-normal text-black">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>

              {/* clear cart  */}
              <Tooltip content="Remove from the Cart" placement="bottom">
                <Button
                  onClick={() => dispatch(clearCart())}
                  size="sm"
                  color="red"
                  ripple={true}
                  variant="outlined"
                >
                  Clear
                </Button>
              </Tooltip>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div className="flex min-h-[200px] flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-20 w-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <h1 className="py-4 font-inter text-base font-bold leading-none tracking-normal text-gray-500 md:text-3xl">
                  Your bag is empty
                </h1>
                <p className="text-center font-inter text-sm leading-none tracking-normal text-gray-700 ">
                  Click outside to close shopping bag
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default DialogBox;
