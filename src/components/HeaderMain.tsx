import React from "react";

import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Navbar from "./Navbar";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <div className="py-6">
      <div className="container sm:flex justify-between items-center">
        <Link href={"/"} className="font-medium text-2xl text-center pb-4 sm:pb-0 text-blackish">
          Shop.
        </Link>
        <Navbar />

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
        <img src="/search.svg" alt="search icon" />

          <div className="relative">
          <img src="/user-circle.svg" alt="user icon" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative">
          <img src="/cart-icon.svg" alt="cart icon" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
