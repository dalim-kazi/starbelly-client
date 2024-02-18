import React from "react";
import CommonButton from "../common/commonButton/CommonButton";
import Link from "next/link";

const OrderCover = () => {
  return (
    <div className="mb-5 lg:mb-20">
      <p className="bg-[#f9fafc] w-20 mx-auto text-center">Shop</p>
      <h1 className="text-xl lg:text-5xl font-semibold leading-tight w-full md:w-1/2 mx-auto text-center mb-5 mt-5">Taste the dishes of the restaurant without leaving home.</h1>
      <p className="text-center text-[#6f6f87]">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>
      <div className="flex justify-center mt-5">
        <CommonButton>
          <Link href={"/"} className="mr-5">
            Home
          </Link>{" "}
          /
          <Link href={""} aria-disabled={true} className="disabled ml-5">
            Order
          </Link>
        </CommonButton>
      </div>
    </div>
  );
};

export default OrderCover;
