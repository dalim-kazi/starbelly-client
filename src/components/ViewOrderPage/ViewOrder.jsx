"use client";
import UseGetCart from "@/Hook/UseGetCart";
import Image from "next/image";
import React, { useState } from "react";
import CommonButton from "../common/commonButton/CommonButton";
import { useDispatch } from "react-redux";
import { getItemToCart } from "@/Data/reducer/AddToCart/AddToCart.Reducer";

const ViewOrder = () => {
  const allCartItem = UseGetCart();
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  // incrementQuantity
  const incrementQuantity = (itemId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemId] || 0;
      return { ...prevQuantities, [itemId]: currentQuantity + 1 };
    });
  };

  // decrementQuantity
  const decrementQuantity = (itemId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemId] || 0;
      const newQuantity = Math.max(currentQuantity - 1, 1);
      return { ...prevQuantities, [itemId]: newQuantity };
    });
  };
  // remove single item
  const removeItem = async (itemId) => {
    setQuantities((prevQuantities) => {
      const { [itemId]: removedItem, ...newQuantities } = prevQuantities;
      return newQuantities;
    });
    const updatedCart = allCartItem?.filter((item) => item._id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    await dispatch(getItemToCart());
  };

  // total and sub total
  const subtotal = allCartItem.reduce((total, item) => {
    const itemId = item?._id;
    const itemQuantity = quantities[itemId] || 1;
    return total + itemQuantity * item.price;
  }, 0);

  const shippingCost = 5; // Assuming a fixed shipping cost of $5

  const total = subtotal + shippingCost;
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
                  const itemQuantity = quantities[itemId] || 1;

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
                            onClick={() => decrementQuantity(itemId)}
                          >
                            -
                          </button>
                          <p className="bg-[#f9fafc] w-14 h-14 flex items-center justify-center text-md font-semibold rounded-md">
                            {itemQuantity}
                          </p>
                          <button
                            className="btn btn-sm rounded-full hover:bg-yellow-500 bg-yellow-400"
                            onClick={() => incrementQuantity(itemId)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item?.price}</td>
                      <td>{(itemQuantity * item.price).toFixed(2)}</td>
                      <th>
                        <button
                          onClick={() => removeItem(itemId)}
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
          <span>{(subtotal).toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-lg font-semibold mt-5">
          <span>Estimated shipping:</span> <span>$5</span>
        </p>
        <p className="flex justify-between text-lg font-semibold mt-5">
          <span>Total:</span>
          <span>{(total).toFixed(2)}</span>
        </p>
        <div className="flex justify-between mt-10 border-b-[1px] border-t-[1px] border-[f2f3f5] py-3">
          <button className="bg-[#f9fafc] hover:underline px-5 text-blue-600 font-semibold">
            Continue shopping
          </button>
          <CommonButton>Checkout</CommonButton>
        </div>
      </div>
    </section>
  );
};

export default ViewOrder;
