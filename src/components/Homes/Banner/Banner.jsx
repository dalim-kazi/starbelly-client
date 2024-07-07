import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
import banner3 from "@/assets/banner/3.png";
import logo from "@/assets/icon/menu.svg";
import CommonButton from "@/components/common/commonButton/CommonButton";

const Banner = () => {
  return (
    <section
      className="lg:flex container justify-between items-center mt-24 lg:mt-40 mb-60 sb-bg-1 px-2"
      aria-labelledby="banner-heading"
    >
      <article className="w-full text-center lg:text-start">
        <span className="bg-base-200 p-1" role="alert">
          Hi, new friend!
        </span>

        <div
          id="banner-heading"
          className="text-5xl font-semibold lg:leading-tight mt-10 mb-5"
        >
          <p> We do not cook,</p> <p>we create your </p>
          <p>emotions!</p>
        </div>
        {/* <h1
          
        ></h1> */}
        <p className="text-[#6f6f87] mb-5">
          Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci quo
          modi.
        </p>
        <div className="flex justify-center lg:justify-start items-center gap-5">
          <Link href="/menu">
            <CommonButton ariaLabel="View Our Menu">
              <Image src={logo} alt="Our menu logo" className="mx-1 md:mx-3" />
              Our Menu
            </CommonButton>
          </Link>
          <Link href="/about">
            <button
              className="flex items-center gap-5 hover:underline p-5"
              aria-label="About us"
            >
              <p className="bg-base-200 rounded-full">
                <BsArrowUpRightCircle className="text-5xl p-3" />
              </p>
              <span className="text-blue-600 font-semibold underline-offset-2">
                About us
              </span>
            </button>
          </Link>
        </div>
      </article>
      <article className="sb-illustration-1-2 w-full mt-24 md:mt-48 lg:mt-0">
        <Image
          className="sb-food-1 w-1/2"
          src={banner1}
          alt="Delicious dish 1"
          placeholder="blur"
          loading="lazy"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />

        <Image
          className="sb-food-2 w-1/2"
          src={banner2}
          alt="Delicious dish 2"
          width={400}
          height={400}
          placeholder="blur"
          loading="lazy"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          className="sb-food-3 w-1/2"
          src={banner3}
          alt="Delicious dish 3"
          width={400}
          height={400}
          placeholder="blur"
          loading="lazy"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="sb-illu-dialog-1">
          <span role="img" aria-label="Tasty">
            😋
          </span>
          &quot;Om-nom-nom...&quot;
        </div>
        <div className="sb-illu-dialog-2">
          <span role="img" aria-label="Delicious">
            🥰
          </span>
          &quot;Sooooo delicious!&quot;
        </div>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className={`sb-cirkle-${index}`}></div>
        ))}
      </article>
    </section>
  );
};

export default Banner;
