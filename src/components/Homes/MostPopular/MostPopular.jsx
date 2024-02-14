// Import necessary libraries and components
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import MostPopular1 from "@/assets/mostPopular/1.jpg";
import MostPopular2 from "@/assets/mostPopular/2.jpg";
import MostPopular3 from "@/assets/mostPopular/3.jpg";
import MostPopular4 from "@/assets/mostPopular/4.jpg";
import MostPopular5 from "@/assets/mostPopular/5.jpg";
import MostPopular6 from "@/assets/mostPopular/9.jpg";
import logo from "@/assets/icon/menu.svg";
import Link from "next/link";
import CommonButton from "@/components/common/commonButton/CommonButton";

const MostPopular = () => {
  // State to keep track of Swiper instance
  const [swiperRef, setSwiperRef] = useState(null);

  // Array of Most Popular Images with titles and prices
  const MostPopularImages = [
    {
      image: MostPopular1,
      title: "Saumon Gravlax",
      price: "$9",
    },
    {
      image: MostPopular2,
      title: "Saumon Gravlax",
      price: "$9",
    },
    {
      image: MostPopular3,
      title: "Saumon Gravlax",
      price: "$12",
    },
    {
      image: MostPopular4,
      title: "Saumon Gravlax",
      price: "$19",
    },
    {
      image: MostPopular5,
      title: "Saumon Gravlax",
      price: "$10",
    },
    {
      image: MostPopular6,
      title: "Saumon Gravlax",
      price: "$9",
    },
  ];

  // Pagination configuration for Swiper
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className="container mt-32 mb-20">
      <article className="w-full flex justify-between mb-10 px-2">
        <div className="w-1/2 md:1/4">
          <h1 className="text-2xl font-semibold leading-tight mb-5">
            Most popular dishes
          </h1>
          <p className="text-[#6f6f87] ">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
        </div>
        <Link href={""}>
          <CommonButton>
            <Image src={logo} alt="logo" className="mx-1 md:mx-3" /> Full Menu
          </CommonButton>
        </Link>
      </article>
      <article className="MostPopular-container relative mt-5 md:mt-10 mb-5 md:mb-10 mx-5">
        {/* Swiper component */}
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={5}
          slidesPerGroup={1}
          autoplay={{ delay: 3000 }}
          spaceBetween={10}
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1020: {
              slidesPerView: 4,
            },
            1220: {
              slidesPerView: 5,
            },
          }}
        >
          {/* Swiper slides */}
          {MostPopularImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <Image
                  src={item.image}
                  alt={`MostPopular ${index + 1}`}
                  width={400}
                  height={250}
                  quality={100}
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between">
                <h1 className="py-5 text-md lg:text-xl font-semibold">
                  {item.title}
                </h1>
                <CommonButton>${item.price}</CommonButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default MostPopular;
