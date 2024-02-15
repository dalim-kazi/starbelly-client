import React from "react";
import chef1 from "@/assets/chef/1.png";
import chef2 from "@/assets/chef/2.png";
import chef3 from "@/assets/chef/3.png";
import chef4 from "@/assets/chef/4.png";
import CommonButton from "@/components/common/commonButton/CommonButton";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icon/menu.svg";
import CommonTitle from "@/components/common/CommonTitle/CommonTitle";
const CookMan = () => {
  const data = [
    {
      id: 1,
      name: "Paul Trueman",
      title: "Chef",
      image: chef1,
    },
    {
      id: 2,
      name: "Emma Newman",
      title: "Assistant chef",
      image: chef2,
    },
    {
      id: 3,
      name: "Oscar Oldman",
      title: "Chef",
      image: chef3,
    },
    {
      id: 4,
      name: "Ed Freeman",
      title: "Assistant chef",
      image: chef4,
    },
  ];
  return (
    <section className="container mt-32 mb-32">
      <article>
        <CommonTitle
          logo={logo}
          title={"They will cook for you"}
          subTitle={
            "Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
          }
          buttonName={"Our About us"}
          link={""}
        />
      </article>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.map((item) => {
          return (
            <div key={item?.id} className="relative group">
              <div className="relative bg-[#f9fafc]">
                <div
                  className="absolute z-0 w-[60%] h-[60%] group-hover:scale-90 bg-yellow-300 rounded-full top-[25%] left-[20%] border-3 border-dotted border-white shadow-3xl"
                  style={{
                    filter: "blur(5px)",
                    transition: "0.3s ease-in-out",
                  }}
                ></div>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={250}
                  height={250}
                  quality={100}
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  className="mx-auto  mb-5 relative inset-0 object-cover p-5 animate-zoom"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl font-semibold">{item?.name}</h1>
                <p>{item?.title}</p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default CookMan;
