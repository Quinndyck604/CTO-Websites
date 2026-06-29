import React from 'react';

const PortfolioItem = ({ image, title, category, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 cursor-pointer"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-80 object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
      <p className="text-indigo-400 font-semibold mb-2">{category}</p>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 flex items-center text-sm font-medium text-white/0 group-hover:text-white transition-colors">
        View Demo Site
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
);

const Portfolio = ({ onOpenDemo }) => {
  const items = [
    {
      id: 'restaurant',
      image: "/port-restaurant.png",
      title: "Bella Notte Italian",
      category: "Restaurant"
    },
    {
      id: 'salon',
      image: "/port-salon.png",
      title: "Lumina Hair Studio",
      category: "Health & Beauty"
    },
    {
      id: 'plumbing',
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
          We've helped businesses across various niches establish a professional online presence that drives results. Click any card to view a live demo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <PortfolioItem 
            key={index} 
            {...item} 
            onClick={() => onOpenDemo(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
