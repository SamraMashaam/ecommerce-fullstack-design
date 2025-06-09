// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white">
      {/* Top section: Logo + Search + Icons */}
      <div className="flex items-center justify-between px-6 py-3 gap-4 flex-wrap">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Brand</div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-gray-600 text-lg">
          <button className="hover:text-blue-600">Login</button>
          <button className="hover:text-blue-600">Cart 🛒</button>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className="bg-white-600 text-sm px-6 py-2 shadow">
        <ul className="flex space-x-6 overflow-x-auto">
          <li className="hover:underline cursor-pointer text-black">Home</li>
          <li className="hover:underline cursor-pointer text-black">All Categories</li>
          <li className="hover:underline cursor-pointer text-black">Top Deals</li>
          <li className="hover:underline cursor-pointer text-black">Best Sellers</li>
          <li className="hover:underline cursor-pointer text-black">New Arrivals</li>
          <li className="hover:underline cursor-pointer text-black">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
