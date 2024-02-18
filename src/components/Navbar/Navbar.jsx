"use client"
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicAddToCart = dynamic(() => import("../AddToCartPage/AddToCart"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("../Contact/Contact"), {
  ssr: false,
});

const Navbar = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isAddToCartOpen, setAddToCartOpen] = useState(false);

  const openContact = () => {
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  const openAddToCartOpen = () => {
    setAddToCartOpen(true);
  };

  const closeAddToCartOpen = () => {
    setAddToCartOpen(false);
  };

  return (
    <section className="bg-base-200 top-0 z-10 fixed py-2 w-full">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link href={"/order"}>Order</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link href={"/order"}>Order</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-5">
            <DynamicAddToCart
              isOpen={isAddToCartOpen}
              openAddToCartOpen={openAddToCartOpen}
              onClose={closeAddToCartOpen}
            />
          </div>
          <div>
            <DynamicContact
              isOpen={isContactOpen}
              openContact={openContact}
              onClose={closeContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
