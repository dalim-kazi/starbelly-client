"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "@/assets/icon/logo.svg";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const DynamicAddToCart = dynamic(() => import("../AddToCartPage/AddToCart"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("../Contact/Contact"), {
  ssr: false,
});

const Navbar = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isAddToCartOpen, setAddToCartOpen] = useState(false);
  const router = useRouter();
  const { allUser } = useSelector((state) => state.auth);

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

  const handleLogout = () => {
    localStorage.removeItem("persist:auth");
    router.reload(); // Refresh the page after logout
    router.push("/");
  };

  return (
    <section className="bg-base-200 top-0 z-50 fixed py-2 w-full">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              role="menu"
            >
              <li role="none">
                <Link href={"/"}>Home</Link>
              </li>
              <li role="none">
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li role="none">
                <Link href={"/order"}>Order</Link>
              </li>
              <li role="none">
                {allUser && allUser?.user ? (
                  <button onClick={handleLogout} role="menuitem">
                    Logout
                  </button>
                ) : (
                  <Link href={"/login"}>Login</Link>
                )}
              </li>
            </ul>
          </div>
          <Link href={"/"} className="text-xl" aria-label="Home">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="object-cover"
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-20">
          <ul className="menu menu-horizontal px-1 text-[1rem]" role="menubar">
            <li role="none">
              <Link href={"/"}>Home</Link>
            </li>
            <li role="none">
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li role="none">
              <Link href={"/order"}>Order</Link>
            </li>
            <li role="none">
              {allUser && allUser?.user ? (
                <button onClick={handleLogout} role="menuitem">
                  Logout
                </button>
              ) : (
                <Link href={"/login"}>Login</Link>
              )}
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
