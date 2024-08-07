import React from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-black p-2 w-full flex justify-center items-center">
        <p className="text-white font-inter text-lg font-bold">
          Redux Toolkit Time
        </p>
      </div>

      {/* Navbar Section */}
      <div className="w-full bg-white shadow-md">
        <div className="w-full flex flex-wrap justify-between  md:p-10 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-16 md:h-28 w-auto" src={logo} alt="store" />
          </div>

          {/* Cart and Wishlist */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {/* Heart Icon */}
            <div className="flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p className="ml-2 font-inter text-base font-medium">
                Wish List
              </p>
            </div>

            {/* Cart Icon */}
            <div className="flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="ml-2 font-inter text-base font-medium">
                Shopping Bag
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="w-full p-4 bg-black flex  md:flex-row justify-center items-center text-center">
        <p className="text-white font-inter text-base font-medium md:px-4">
          50% OFF
        </p>
        <p className="text-white font-inter text-base font-medium my-2 md:my-0 md:px-4">
          Free shipping and returns
        </p>
        <p className="text-white font-inter text-base font-medium md:px-4">
          Different payment methods
        </p>
      </div>
    </>
  );
};

export default Navbar;
