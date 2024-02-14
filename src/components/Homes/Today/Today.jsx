import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import logo1 from "@/assets/icon/1.png";
import logo2 from "@/assets/icon/2.png";
import logo3 from "@/assets/icon/3.png";
import logo4 from "@/assets/icon/4.png";
import CommonButton from "@/components/common/commonButton/CommonButton";

const Today = () => {
  return (
    <section className="container mb-10 px-2">
      <article className="flex justify-between">
        <div className="w-2/3 md:w-1/4">
          <h1 className="text-2xl font-semibold leading-tight">
            What do you like today?
          </h1>
          <p className="text-[#6f6f87] mt-5">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
        </div>
        <div>
          <Link href={""}>
            <CommonButton>
              <BsArrowUpRightCircle className="text-2xl md:mr-5" />
              GO Shopping Now
            </CommonButton>
          </Link>
        </div>
      </article>
      <ul className="grid grid-cols-1 w-full md:grid-cols-2 gap-10 justify-between mt-20">
        <li className="flex relative items-center gap-10 bg-base-200 p-8 hover:underline group">
          <Image
            src={logo1}
            alt="logo"
            width={80}
            height={80}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            loading="lazy"
            quality={100}
            className="z-50 transition-transform duration-300 transform scale-100 group-hover:-translate-y-2"
          />
          <div>
            <h1 className="text-2xl text-blue-600 font-semibold leading-tight hover:underline">
              Starters
            </h1>
            <p className="text-[#6f6f87] hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, minima.
            </p>
          </div>
          <div className="absolute bottom-3 left-[3.2rem] group-hover:scale-110 transform-origin-center sm:hover:scale-105 md:group-hover:scale-110 lg:group-hover:scale-115 xl:group-hover:scale-120">
            <div className="w-15 h-15 p-5 bg-yellow-400 rounded-full shadow-md animate-zoom-in-out"></div>
          </div>
        </li>
        <li className="flex relative items-center gap-10 bg-base-200 p-8 hover:underline group">
          <Image
            src={logo2}
            alt="logo"
            width={80}
            height={80}
            quality={100}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            loading="lazy"
            className="z-50 transition-transform duration-300 transform scale-100 group-hover:-translate-y-2"
          />
          <div>
            <h1 className="text-2xl text-blue-600 font-semibold leading-tight hover:underline">
              Starters
            </h1>
            <p className="text-[#6f6f87] hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, minima.
            </p>
          </div>
          <div className="absolute bottom-3 left-[3.2rem] group-hover:scale-110 transform-origin-center sm:hover:scale-105 md:group-hover:scale-110 lg:group-hover:scale-115 xl:group-hover:scale-120">
            <div className="w-15 h-15 p-5 bg-yellow-400 rounded-full shadow-md animate-zoom-in-out"></div>
          </div>
        </li>

        <li className="flex relative items-center gap-10 bg-base-200 p-8 hover:underline group">
          <Image
            src={logo3}
            alt="logo"
            width={80}
            height={80}
            quality={100}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            loading="lazy"
            className="z-50 transition-transform duration-300 transform scale-100 group-hover:-translate-y-2"
          />
          <div>
            <h1 className="text-2xl text-blue-600 font-semibold leading-tight hover:underline">
              Starters
            </h1>
            <p className="text-[#6f6f87] hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, minima.
            </p>
          </div>
          <div className="absolute bottom-3 left-[2.9rem] group-hover:scale-110 transform-origin-center sm:hover:scale-105 md:group-hover:scale-110 lg:group-hover:scale-115 xl:group-hover:scale-120">
            <div className="w-15 h-15 p-5 bg-yellow-400 rounded-full shadow-md animate-zoom-in-out"></div>
          </div>
        </li>

        <li className="flex relative items-center gap-10 bg-base-200 p-8 hover:underline group">
          <Image
            src={logo4}
            alt="logo"
            width={80}
            height={80}
            quality={100}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            loading="lazy"
            className="z-50 transition-transform duration-300 transform scale-100 group-hover:-translate-y-2"
          />
          <div>
            <h1 className="text-2xl text-blue-600 font-semibold leading-tight hover:underline">
              Starters
            </h1>
            <p className="text-[#6f6f87] hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, minima.
            </p>
          </div>
          <div className="absolute bottom-3 left-[3.2rem] group-hover:scale-110 transform-origin-center sm:hover:scale-105 md:group-hover:scale-110 lg:group-hover:scale-115 xl:group-hover:scale-120">
            <div className="w-15 h-15 p-5 bg-yellow-400 rounded-full shadow-md animate-zoom-in-out"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Today;
