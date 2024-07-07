import CommonButton from "@/components/common/commonButton/CommonButton";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
const MenuCard = ({ menu }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleCardClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleOverlayClick = () => {
    setIsFullScreen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsFullScreen(false);
    }
  };

  const getBackgroundColor = () => {
    // Example: Determine background color based on the rating
    const rating = menu?.ratting || 0;
    if (rating >= 4.5) {
      return "bg-green-300";
    } else if (rating >= 3.5) {
      return "bg-yellow-300";
    } else if (rating >= 2.5) {
      return "bg-orange-400";
    } else if (rating >= 1.5) {
      return "bg-red-400";
    } else {
      return "bg-[#f9fafc]";
    }
  };

  return (
    <div>
      <article
        className={`relative group cursor-pointer transition px-2 mb-5 ${
          isFullScreen ? "bg-white z-50" : ""
        }`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <header
          className={`flex justify-between items-center ${getBackgroundColor()}`}
        >
          <h1 className="text-2xl leading-tight font-semibold pl-5 text-blue-600 group-hover:underline">
            {menu?.name}
          </h1>
          <div className="group-hover:underline underline-offset-2 text-blue-600">
            <CommonButton>$ {menu?.price}</CommonButton>
          </div>
        </header>
        <p className="text-[#6f6f87] mt-5 group-hover:underline mb-2">
          {menu?.recipe}
        </p>
        {menu?.ratting ? (
          <div className="flex">
            <Rating
              style={{ maxWidth: "120px" }}
              value={menu?.ratting}
              readOnly
            />
            <p>({menu?.ratting} ratings)</p>
          </div>
        ) : (
          <></>
        )}
      </article>
      {isFullScreen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center overlay">
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-300 blur`}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Image
              src={menu?.image}
              alt={menu?.name}
              width={600}
              height={800}
              className="z-50 shadow-lg object-cover"
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
              quality={100}
              loading="lazy"
            />
          </div>
          <button
            onClick={handleOverlayClick}
            className="absolute shadow-lg top-10 right-20  text-2xl bg-yellow-400 rounded-full text-white w-10 h-10 flex items-center justify-center"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
