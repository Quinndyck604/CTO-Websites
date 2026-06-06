import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-white border-b border-gray-100">
      <div className="text-2xl font-bold text-indigo-600">PixelForge Sites</div>
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <a href="#services" className="hover:text-indigo-600 transition">Services</a>
        <a href="#portfolio" className="hover:text-indigo-600 transition">Portfolio</a>
        <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
