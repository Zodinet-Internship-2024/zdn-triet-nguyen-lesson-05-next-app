import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium text-sm py-4 text-[#6c7275]">
          <Link className="navbar__link relative text-black" href="#">
            Home
          </Link>
          <Link className="navbar__link relative" href="#">
            Shop
          </Link>
          <Link className="navbar__link relative" href="#">
            Product
          </Link>
          <Link className="navbar__link relative" href="#">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
