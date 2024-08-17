// src/components/Header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiSearch } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  return (
    // <header className="bg-blue-300 shadow-md  w-full z-50">
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //     {/* Logo or Brand Name */}
    //     <div className="text-2xl font-extrabold text-orange-500">
    //       <Link to="/" className="flex items-center space-x-2">
    //         <FiShoppingCart className="text-3xl" />
    //         <span>MyStore</span>
    //       </Link>
    //     </div>

    //     {/* Desktop Navigation Links */}
    //     <nav className="hidden md:flex space-x-6 items-center">
    //       <Link
    //         to="/"
    //         className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         to="/products"
    //         className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold"
    //       >
    //         Products
    //       </Link>
    //       <Link
    //         to="/cart"
    //         className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold"
    //       >
    //         Cart
    //       </Link>
    //       {/* Search Bar */}
    //       <form onSubmit={handleSearch} className="relative">
    //         <input
    //           type="text"
    //           value={searchQuery}
    //           onChange={(e) => setSearchQuery(e.target.value)}
    //           placeholder="Search products..."
    //           className="w-48 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
    //         />
    //         <button
    //           type="submit"
    //           className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
    //         >
    //           <FiSearch />
    //         </button>
    //       </form>
    //     </nav>

    //     {/* Mobile Menu Button */}
    //     <div className="md:hidden flex items-center">
    //       <button
    //         onClick={toggleMobileMenu}
    //         className="text-gray-600 hover:text-orange-500 focus:outline-none transition-colors duration-300"
    //       >
    //         {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Navigation Links */}
    //   {mobileMenuOpen && (
    //     <nav className="md:hidden bg-white shadow-md">
    //       <ul className="flex flex-col items-center space-y-4 py-4">
    //         <li>
    //           <Link
    //             to="/"
    //             onClick={toggleMobileMenu}
    //             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold text-lg"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/products"
    //             onClick={toggleMobileMenu}
    //             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold text-lg"
    //           >
    //             Products
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/cart"
    //             onClick={toggleMobileMenu}
    //             className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-semibold text-lg"
    //           >
    //             Cart
    //           </Link>
    //         </li>
    //         {/* Mobile Search Bar */}
    //         <li className="w-10/12">
    //           <form onSubmit={handleSearch} className="relative">
    //             <input
    //               type="text"
    //               value={searchQuery}
    //               onChange={(e) => setSearchQuery(e.target.value)}
    //               placeholder="Search products..."
    //               className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
    //             />
    //             <button
    //               type="submit"
    //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
    //             >
    //               <FiSearch />
    //             </button>
    //           </form>
    //         </li>
    //       </ul>
    //     </nav>
    //   )}
    // </header>

    <header>
      <div className="flex justify-center text-pink-500 bg-blue-500">
        {/* logo */}
        <div className="text-red-400">Shoping-Stores</div>

        {/* menus */}
        <div className="flex justify-center text-red-500">
          <Link to="/" className="flex justify-center text-red-500">
            Home
          </Link>

          <Link to="/Products">Products</Link>

          <Link to="/">Cart</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
