import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="flex items-center justify-between px-6 py-3 gap-4 flex-wrap">
        <div className="text-2xl font-bold text-blue-600">Brand</div>

        {/* Search */}
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

        <div className="flex gap-4 text-gray-600 text-lg">
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart 🛒</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white text-sm px-6 py-2 shadow">
        <ul className="flex space-x-6 overflow-x-auto">
          <li><Link to="/" className="hover:underline text-black">Home</Link></li>
          <li><Link to="/products" className="hover:underline text-black">View Products</Link></li>
        </ul>
      </nav>
    </header>
  );
}
