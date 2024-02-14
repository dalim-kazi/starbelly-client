import Image from "next/image";
import React from "react";
import { Monoton } from "next/font/google";
import interiorImage from "@/assets/2.jpg";
const monoton = Monoton({ subsets: ["latin"], weight: "400" });
const Experiences = () => {
  return (
    <section className="lg:flex items-center gap-20 container mb-10 lg:mb-52">
      <article className="w-1/2 relative">
        <div className=" w-screen h-96 lg:w-[40rem] lg:h-[50rem] relative overflow-hidden">
          <Image
            src={interiorImage}
            alt="Interior"
            className="w-full h-full absolute inset-0 object-cover animate-zoom"
            style={{ objectFit: "cover" }}
            quality={100}
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="hidden lg:block">
        <div className="absolute  w-64 h-64 bg-white -bottom-20 right-0 shadow-2xl flex justify-center items-center">
          <div className="p-8 text-center border-4 border-[#f2f3f5] border-dashed">
            <h1
              className={`${monoton.className} text-[4.3rem] text-[#1c190f] leading-tight`}
            >
              17
            </h1>
            <h2 className="text-xl font-semibold">
              Years <br /> Experience
            </h2>
          </div>
        </div>
        </div>
      </article>
      <article className="w-full lg:w-1/2 px-5 mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold leading-tight mb-20">
          We Offer Exceptional Experiences
        </h1>
        <ul>
          <li className="flex items-start gap-10 mb-20">
            <p
              className={`${monoton.className} text-4xl text-[#f3c027] leading-tight`}
            >
              01
            </p>
            <div>
              <h2 className="text-2xl font-semibold leading-tight mb-5">
                We are located in the city center
              </h2>
              <p className="text-[#6f6f87]">
                Porro nemo veniam necessitatibus praesentium eligendi rem
                temporibus adipisci quo modi numquam.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-10 mb-20">
            <p
              className={`${monoton.className} text-4xl text-[#f3c027] leading-tight`}
            >
              02
            </p>
            <div>
              <h2 className="text-2xl font-semibold leading-tight mb-5">
                Fast Delivery
              </h2>
              <p className="text-[#6f6f87]">
                Consectetur numquam porro nemo veniam necessitatibus praesentium
                eligendi rem temporibus adipisci quo modi.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-10 mb-20">
            <p
              className={`${monoton.className} text-4xl text-[#f3c027] leading-tight`}
            >
              03
            </p>
            <div>
              <h2 className="text-2xl font-semibold leading-tight mb-5">
                Quality Service
              </h2>
              <p className="text-[#6f6f87]">
                Necessitatibus praesentium eligendi rem temporibus adipisci quo
                modi. Lorem ipsum dolor sit.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experiences;
