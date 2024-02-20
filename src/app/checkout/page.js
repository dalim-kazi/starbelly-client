import CheckoutCart from "@/components/CheckoutPage/CheckoutCart";
import CheckoutCover from "@/components/CheckoutPage/CheckoutCover";
import UserInfo from "@/components/CheckoutPage/UserInfo";
import React from "react";
import dynamic from "next/dynamic";
const DynamicCheckoutCart = dynamic(
  () => import("@/components/CheckoutPage/CheckoutCart"),
  { ssr: false }
);
const checkout = () => {
  return (
    <div className="mb-20">
      <CheckoutCover />
      <div className="container lg:flex justify-between gap-20 mt-20">
        <UserInfo />
        <DynamicCheckoutCart />
      </div>
    </div>
  );
};

export default checkout;
