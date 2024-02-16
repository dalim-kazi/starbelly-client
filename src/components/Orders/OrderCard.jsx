import Image from "next/image";
import React from "react";
import CommonButton from "../common/commonButton/CommonButton";
import logo from "@/assets/icon/arrow.svg";
import cart from "@/assets/icon/cart.svg";
import Link from "next/link";
const OrderCard = ({ menu }) => {
  return (
    <section className="relative mb-10">
      <div>
        <Image
          src={menu?.image}
          alt={menu?.name}
          width={300}
          height={200}
          layout="responsive"
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="flex justify-between items-center gap-5 mt-2">
        <h1 className="text-lg font-semibold w-2/3">{menu?.name}</h1>
        <h1 className="text-xl font-bold text-orange-500">${menu?.price}</h1>
      </div>
      <p className="text-[#6f6f87] mt-2 mb-14">{menu?.recipe.slice(0, 50)}</p>

      <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-between">
        <div>
          {" "}
          <Link href={`/order/${menu?._id}`}>
            <button className="bg-[#f9fafc] p-4 rounded-full ">
              <Image src={logo} alt="logo" width={30} height={30} />
            </button>
          </Link>
        </div>
        <CommonButton>
          <Image
            src={cart}
            alt="cart"
            width={20}
            height={20}
            className="mr-5"
          />
          Add To Cart
        </CommonButton>
      </div>
    </section>
  );
};

export default OrderCard;
