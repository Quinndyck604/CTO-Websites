import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-gray-50 border-t border-gray-200 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600 mb-4">PixelForge Sites</div>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Crafting digital success for local businesses. Modern, fast, and affordable.
        </p>
        <div className="flex justify-center space-x-6 text-gray-400 mb-8">
          <a href="#" className="hover:text-indigo-600 transition">Twitter</a>
          <a href="#" className="hover:text-indigo-600 transition">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600 transition">Instagram</a>
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} PixelForge Sites. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
