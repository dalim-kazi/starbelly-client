import Image from "next/image";
import React from "react";
import burger from "@/assets/offered/burger.png";
import cup from "@/assets/offered/cup.png";
import logo from "@/assets/icon/arrow.svg";
import CommonButton from "@/components/common/commonButton/CommonButton";
const Offered = () => {
  return (
    <section className="lg:flex justify-between gap-10 items-center mt-20">
      <article className=" relative w-full h-96 flex justify-between items-center bg-[#f9fafc] py-5">
        <div className="px-8 z-50 lg:z-0">
          <h1 className="text-5xl font-semibold leading-tight mb-2">- 50 %</h1>
          <h2 className="text-4xl font-semibold leading-tight mb-2 w-1/2">
            Discount for all* burgers!
          </h2>
          <p className="text-[#6f6f87] mb-5">*Et modi itaque praesentium.</p>
          <CommonButton>
            <Image
              src={logo}
              alt="logo"
              width={20}
              height={20}
              quality={100}
              loading="lazy"
              className="mr-5"
            />
            Get it Now
          </CommonButton>
        </div>
        <Image
          src={burger}
          alt="burger"
          width={400}
          height={400}
          loading="lazy"
          placeholder="blur"
          style={{ objectFit: "cover" }}
          className=" absolute right-0 object-cover scroll-up2 opacity-50 md:opacity-100"
        />
        <div className="scroll-up  absolute top-[60%] right-[10%] w-20 h-20 shadow-xl border-[20px] border-solid border-white rounded-full"></div>
      </article>
      <article className="relative w-full h-96 flex justify-between items-center bg-[#f9fafc] p-10">
        <div className="z-50 lg:z-0">
          <h1 className="text-3xl font-semibold leading-tight mb-2 w-1/2">
            Visit Starbelly and get your coffee*
          </h1>
          <h2 className="text-4xl font-semibold leading-tight mb-2">
            For free!
          </h2>
          <p className="text-[#6f6f87] mb-5">*Et modi itaque praesentium.</p>
          <CommonButton>
            <Image
              src={logo}
              alt="logo"
              width={20}
              height={20}
              loading="lazy"
              quality={100}
              className="mr-5"
            />
            Get it Now
          </CommonButton>
        </div>
        <div>
          <Image
            src={cup}
            alt="cup"
            width={200}
            height={200}
            quality={100}
            loading="lazy"
            placeholder="blur"
            style={{ objectFit: "cover" }}
            className="absolute right-[10%] top-[10%] object-cover z-0 scroll-up opacity-50 md:opacity-100"
          />
          <div className="scroll-up  absolute top-[55%] right-[23%] w-20 h-20 shadow-xl border-[20px] border-solid border-white rounded-full"></div>
          <div className="animate-zoom2 absolute top-[20%] right-[5%] w-5 h-5 bg-yellow-400 rounded-full shadow-xl"></div>
          <div className="animate-zoom2 absolute top-[40%] left-[50%] w-10 h-10 bg-yellow-400 rounded-full shadow-xl"></div>
        </div>
      </article>
    </section>
  );
};

export default Offered;
