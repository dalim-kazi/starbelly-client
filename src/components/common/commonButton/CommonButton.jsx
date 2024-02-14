import React from "react";

const CommonButton = ({ children }) => {
  return (
    <button className="flex opacity-100 border-none px-2 py-2 md:px-5 md:py-5 cursor-pointer transform scale-100 leading-normal text-blue-600 hover:underline underline-offset-2 font-semibold bg-yellow-400 transition duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default CommonButton;
