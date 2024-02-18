import React from "react";
import CommonButton from "../common/commonButton/CommonButton";
import cart from "@/assets/icon/cart.svg";
import barger from "@/assets/delivery/burger-2.png";
import Image from "next/image";
const FoodDetailsCover = () => {
  return (
    <section className="bg-[#f9fafc] md:flex justify-between items-center px-5 lg:p-20">
      <article className="w-full mb-10">
        <h1 className="text-4xl font-semibold mb-10">
          <span className="text-7xl font-semibold leading-tight">-50%</span>{" "}
          Discount <br /> for all* burgers!
        </h1>
        <p className="text-[#6f6f87] mb-10 ">
          *Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci quo
          modi.
        </p>
        <CommonButton>
          <Image
            src={cart}
            alt="cart"
            width={20}
            height={20}
            style={{ objectFit: "cover" }}
            className=" object-cover mr-5"
          />{" "}
          Get it Now
        </CommonButton>
      </article>
      <article className=" relative">
        <Image
          src={barger}
          alt="burger"
          width={600}
                  height={600}
                  placeholder="blur"
                  quality={100}
          style={{ objectFit: "cover" }}
          className=" object-cover"
        />
        <div className="scroll-up2 absolute top-[60%] right-0 w-32 h-32 shadow-xl border-[30px] border-solid border-white rounded-full"></div>
        <div className="animate-zoom2 absolute top-[60%] left-0 w-10 h-10 bg-yellow-400 rounded-full shadow-xl"></div>
        <div className="scroll-up2 absolute top-[30%] right-[65%] w-10 h-10 border-[10px] border-white rounded-full shadow-xl"></div>
      </article>
    </section>
  );
};

export default FoodDetailsCover;
