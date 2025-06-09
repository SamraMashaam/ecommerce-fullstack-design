// src/components/Hero.jsx
import React from 'react';
import bannerImg from '../assets/banner.jpg'; // Replace with your own image

export default function Hero() {
  return (
    <section className="relative group w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

       {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Big Summer Sale</h1>
          <p className="text-lg mb-6">Up to 50% off on electronics, fashion, and more!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
