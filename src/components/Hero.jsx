import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Business Deserves a <span className="text-indigo-600">Premium</span> Online Presence.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          We build modern, professional, and mobile-responsive websites for local businesses in days, not months. No agency price tag, just pure quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition shadow-lg">
            View Our Work
          </button>
          <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img 
          src="/hero.png" 
          alt="Modern workspace with laptop" 
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
