import Link from "next/link";
import React from "react";
import CommonButton from "../commonButton/CommonButton";
import Image from "next/image";

const CommonTitle = ({ logo, title, subTitle, buttonName, link }) => {
  return (
    <div className="w-full flex justify-between mb-8 px-2">
      <div className="w-2/3 md:w-1/4">
        <h1 className="text-2xl font-semibold leading-tight">{title}</h1>
        <p className="text-[#6f6f87] mt-5">{subTitle}</p>
      </div>
      <div>
        <Link href={link}>
          <CommonButton>
            <Image src={logo} alt="logo" className="mx-1 md:mx-3" />{" "}
            {buttonName}
          </CommonButton>
        </Link>
      </div>
    </div>
  );
};

export default CommonTitle;
