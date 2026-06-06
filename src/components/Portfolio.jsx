import React from 'react';

const PortfolioItem = ({ image, title, category }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-80 object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
      <p className="text-indigo-400 font-semibold mb-2">{category}</p>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

const Portfolio = () => {
  const items = [
    {
      image: "/port-restaurant.png",
      title: "Bella Notte Italian",
      category: "Restaurant"
    },
    {
      image: "/port-salon.png",
      title: "Lumina Hair Studio",
      category: "Health & Beauty"
    },
    {
      image: "/port-trades.png",
      title: "Apex Plumbing Co.",
      category: "Home Services"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Example Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We've helped businesses across various niches establish a professional online presence that drives results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
