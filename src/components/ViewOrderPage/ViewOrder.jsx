"use client";
import UseGetCart from "@/Hook/UseGetCart";
import Image from "next/image";
import React, { useState } from "react";
import CommonButton from "../common/commonButton/CommonButton";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  getItemToCart,
  incrementQuantity,
  removeItemFromCart,
} from "@/Data/reducer/AddToCart/AddToCart.Reducer";
import Link from "next/link";

const ViewOrder = () => {
  const allCartItem = UseGetCart();
  const dispatch = useDispatch();

  // Calculate subtotal, shipping cost, and total
  const calculateTotals = () => {
    const subtotal = allCartItem.reduce(
      (total, item) => total + item?.totalPrice,
      0
    );
    const shippingCost = 5; // Assuming a fixed shipping cost of $5
    const total = subtotal + shippingCost;
    return { subtotal, shippingCost, total };
  };

  const { subtotal, shippingCost, total } = calculateTotals();
  return (
    <section className="mt-10 mb-52 max-w-5xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allCartItem
              ? allCartItem.map((item) => {
                  const itemId = item?._id;
                  return (
                    <tr key={itemId} className="text-center">
                      <td>
                        <div className="flex items-center gap-3">
                          <Image
                            src={item?.image}
                            alt={item?.name}
                            width={100}
                            height={100}
                            loading="lazy"
                            style={{ objectFit: "cover" }}
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td>
                        {" "}
                        <h1 className="font-bold">{item?.name}</h1>
                      </td>
                      <td className="text-center">
                        <div className="flex items-center justify-center gap-5">
                          <button
                            className="btn btn-sm rounded-full hover:bg-yellow-500 bg-yellow-400"
                            onClick={() => dispatch(decrementQuantity(itemId))}
                          >
                            -
                          </button>
                          <p className="bg-[#f9fafc] w-14 h-14 flex items-center justify-center text-md font-semibold rounded-md">
                            {item?.quantity}
                          </p>
                          <button
                            className="btn btn-sm rounded-full hover:bg-yellow-500 bg-yellow-400"
                            onClick={() => dispatch(incrementQuantity(itemId))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item?.price}</td>
                      {item.totalPrice ? <td>{(item?.totalPrice).toFixed(2)}</td> : <td>{item?.price}</td>}
                      <th>
                        <button
                          onClick={() => dispatch(removeItemFromCart(itemId))}
                          className="btn btn-xs"
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="ml-auto w-full lg:w-1/2 mt-10 px-5 lg:px-0">
        <p className="flex justify-between text-lg font-semibold">
          <span>Subtotal:</span>
          {subtotal !== undefined && <span>{subtotal.toFixed(2)}</span>}
        </p>
        <p className="flex justify-between text-lg font-semibold mt-5">
          <span>Estimated shipping:</span> <span>$ {shippingCost}</span>
        </p>
        <p className="flex justify-between text-lg font-semibold mt-5">
          <span>Total:</span>
          {total !== undefined && <span>{total.toFixed(2)}</span>}
        </p>
        <div className="flex justify-between mt-10 border-b-[1px] border-t-[1px] border-[f2f3f5] py-3">
          <Link href={"/order"} className="bg-[#f9fafc] p-5">
            <button className=" hover:underline text-blue-600 font-semibold">
              Continue shopping
            </button>
          </Link>
          <Link href={"/checkout"}>
            <CommonButton>Checkout</CommonButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ViewOrder;
