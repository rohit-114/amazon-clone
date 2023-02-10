import Image from "next/image";
import React from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineMenu,
  HiOutlineSearch,
} from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-1 bg-amazon_blue">
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2">
          <Image
            priority
            src="/amazon_logo.png"
            width={110}
            height={20}
            className="cursor-pointer object-contain p-2"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-md">
          <input
            type="text"
            className="p-2 px-4 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md"
          />
          <div className="p-3">
            <HiOutlineSearch size={18} />
          </div>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Rohit</p>
            <p className="font-bold md:text-sm">Accounts & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div className="flex items-center relative link">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full font-bold bg-yellow-400 text-black text-center">
              0
            </span>
            <HiOutlineShoppingCart size={42} />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 pl-4 space-x-4 bg-amazon_blue-light text-sm text-white w-full">
        <p className="link flex items-center">
          <HiOutlineMenu size={22} style={{ marginRight: "4px" }} />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
