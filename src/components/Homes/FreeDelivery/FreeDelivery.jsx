import CommonButton from "@/components/common/commonButton/CommonButton";
import React from "react";
import cart from "@/assets/delivery/cart.svg";
import deliveryBanner from "@/assets/delivery/delivery.png";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
const FreeDelivery = () => {
  return (
    <section className="container md:flex items-center bg-[#f9fafc] mt-20 mb-10 p-10">
      <article className="w-full md:w-1/2 mb-10 text-center md:text-start">
        <h1 className="text-2xl lg:text-7xl font-semibold leading-tight mb-5">
          Free delivery service.
        </h1>
        <p className="text-[#6f6f87] mb-5 w-full md:w-2/3">
          *Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
        </p>
        <div className="flex justify-center items-center md:justify-start">
          <div>
            <CommonButton>
              <Image
                src={cart}
                alt="cart"
                width={20}
                height={20}
                className="mr-5"
              />
              Order Delivery
            </CommonButton>
          </div>
          <div>
            <button className="flex items-center gap-5 hover:underline p-5">
              <p className="bg-base-200 rounded-full">
                {" "}
                <BsArrowUpRightCircle className="text-5xl p-3" />{" "}
              </p>
              <span className="text-blue-600 font-semibold underline-offset-2">
                Our Menu
              </span>
            </button>
          </div>
        </div>
      </article>
      <article className="w-full md:w-1/2">
        <Image
          src={deliveryBanner}
          alt="deliveryBanner"
          placeholder="blur"
          style={{ objectFit: "cover" }}
          quality={100}
          className=""
        />
      </article>
    </section>
  );
};

export default FreeDelivery;
