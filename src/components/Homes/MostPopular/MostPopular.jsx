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
import CommonButton from "@/components/common/commonButton/CommonButton";
import CommonTitle from "@/components/common/CommonTitle/CommonTitle";

const MostPopular = () => {
  const [swiperRef, setSwiperRef] = useState(null);

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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section
      className="container mt-32 mb-20"
      aria-labelledby="most-popular-heading"
    >
      <article>
        <CommonTitle
          logo={logo}
          title="Most popular dishes"
          subTitle="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
          link="/menu"
          buttonName="Full Menu"
        />
      </article>
      <article className="MostPopular-container relative mt-5 md:mt-10 mb-5 md:mb-10 mx-5">
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
          {MostPopularImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  quality={100}
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between">
                <h2 className="py-5 text-md lg:text-xl font-semibold">
                  {item.title}
                </h2>
                <CommonButton aria-label={`Price of ${item.title}`}>
                  {item.price}
                </CommonButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default MostPopular;
