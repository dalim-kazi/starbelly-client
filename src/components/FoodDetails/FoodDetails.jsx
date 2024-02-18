"use client";
import { useAllMenus } from "@/Hook/Usemenus";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Monoton } from "next/font/google";
import "@smastrom/react-rating/style.css";
import CommonButton from "../common/commonButton/CommonButton";
import { Rating } from "@smastrom/react-rating";
import cart from "@/assets/icon/cart.svg";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/Data/reducer/AddToCart/AddToCart.Reducer";
const monoton = Monoton({ subsets: ["latin"], weight: "400" });
const FoodDetails = ({ foodId }) => {
  const dispatch = useDispatch();
  const { allMenus } = useAllMenus();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };

  const addToCard = async (item) => {
    const newFood = {
      _id: item?._id,
      category: item?.category,
      name: item?.name,
      image: item?.image,
      price: item?.price,
      quantity: quantity,
      recipe: item?.recipe,
    };
    await dispatch(addItemToCart(newFood));
  };

  const singleFoodDetails = allMenus?.filter(
    (item) => item._id === foodId?.foodId
  );

  return (
    <section className="w-full px-2 xl:w-3/4 mx-auto mt-32 mb-32">
      {singleFoodDetails ? (
        singleFoodDetails?.map((item) => (
          <article key={item?._id} className="md:flex gap-10 items-center">
            <div className="w-full xl:w-1/2 mx-auto shadow-lg border-1 mb-10 md:mb-0">
              <Image
                src={item?.image}
                alt={item?.name}
                width={800}
                height={800}
                style={{ objectFit: "cover" }}
                loading="lazy"
                quality={100}
                className="w-full object-cover"
              />
            </div>
            <div className="xl:w-1/2 mx-auto">
              <div className="flex justify-between items-center bg-[#f9fafc]">
                <h1 className="px-5 text-lg font-semibold leading-tight">
                  {item.name}
                </h1>
                <CommonButton>$ {item?.price}</CommonButton>
              </div>
              {item?.ratting ? (
                <div className="flex mt-5">
                  <Rating
                    style={{ maxWidth: "120px" }}
                    value={item?.ratting}
                    readOnly
                  />
                  <p>({item?.ratting} ratings)</p>
                </div>
              ) : (
                <></>
              )}
              <p className="text-[#6f6f87] mt-5">{item?.recipe}</p>
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
                <div>
                  <h1
                    className={`${monoton.className} text-3xl text-yellow-400 mb-5`}
                  >
                    01
                  </h1>
                  <h2 className="text-lg lg:text-2xl font-semibold leading-tight">
                    Add to the cart and place an order
                  </h2>
                </div>
                <div>
                  <h1
                    className={`${monoton.className} text-3xl text-yellow-400 mb-2`}
                  >
                    02
                  </h1>
                  <h2 className="text-lg lg:text-2xl font-semibold leading-tight">
                    Enter your phone number and address
                  </h2>
                </div>
                <div>
                  <h1
                    className={`${monoton.className} text-3xl text-yellow-400 mb-2`}
                  >
                    03
                  </h1>
                  <h2 className="text-lg lg:text-2xl font-semibold leading-tight">
                    Enjoy your favorite food at home!
                  </h2>
                </div>
              </div>
              <div className="flex items-center  mt-10 gap-20">
                <div className="flex items-center gap-5">
                  <button
                    className="btn btn-sm rounded-full hover:bg-yellow-500 bg-yellow-400"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <p className="bg-[#f9fafc] w-14 h-14 flex items-center justify-center text-md font-semibold rounded-md">
                    {quantity}
                  </p>
                  <button
                    className="btn btn-sm  rounded-full hover:bg-yellow-500 bg-yellow-400"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => addToCard(item)}
                    className="flex opacity-100 border-none px-2 py-2 md:px-5 md:py-5 cursor-pointer transform scale-100 leading-normal text-blue-600 hover:underline underline-offset-2 font-semibold bg-yellow-400 transition duration-300 ease-in-out"
                  >
                    <Image
                      src={cart}
                      alt="cart"
                      width={20}
                      height={20}
                      quality={100}
                      className="object-cover mr-5"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default FoodDetails;
