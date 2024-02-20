"use client";
import UseGetCart from "@/Hook/UseGetCart";
import Image from "next/image";
import React from "react";

const CheckoutCart = () => {
  const allCartItem = UseGetCart();
  const calculateTotals = () => {
    const subtotal = allCartItem.reduce(
      (total, item) => total + item?.totalPrice,
      0
    );
    const shippingCost = 5; // Assuming a fixed shipping cost of $5
    const total = subtotal + shippingCost;
    return { subtotal, total };
  };

  const { subtotal, total } = calculateTotals();
  return (
    <section className="w-full lg:w-2/3 xl:w-1/2 bg-[#f9fafc] p-5 rounded-md">
      <p className="text-md flex justify-between border-b-[1px] pb-4 border-[#d7ddea] px-5 lg:px-0">
        <span>Product</span>
        <span>Total</span>
      </p>
      <div>
        {allCartItem
          ? allCartItem?.map((item) => {
              return (
                <div
                  key={item?._id}
                  className="flex justify-between items-center mb-10 mt-10"
                >
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                    className=" object-cover"
                  />
                  <h1 className="lg:text-md xl:text-lg font-semibold">
                    {item?.name}
                  </h1>
                  <p>${item?.price}</p>
                </div>
              );
            })
          : null}
        <div className="border-t-[1px] border-[#d7ddea] py-3">
          <p className="flex justify-between text-md font-semibold">
            <span>Subtotal:</span>
            {subtotal && <span>${subtotal.toFixed(2)}</span>}
          </p>
          <p className="flex justify-between text-md font-semibold mt-5">
            <span>Total:</span>
            {total && <span>{(total).toFixed(2)}</span>}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCart;
