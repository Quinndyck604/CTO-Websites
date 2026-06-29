import React from 'react';

const RestaurantDemo = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] font-serif">
      {/* Demo Header */}
      <div className="bg-indigo-600 text-white py-2 px-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-sm font-sans font-medium">Live Demo: Bella Notte Italian</span>
        <button 
          onClick={onClose}
          className="bg-white text-indigo-600 px-3 py-1 rounded text-sm font-sans font-bold hover:bg-indigo-50 transition-colors"
        >
          &larr; Back to Portfolio
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center bg-white border-b border-gray-100">
        <h1 className="text-3xl font-bold tracking-tighter italic">Bella Notte</h1>
        <div className="hidden md:flex space-x-8 font-sans uppercase text-xs tracking-widest font-bold">
          <a href="#" className="hover:text-amber-600 transition-colors">Menu</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Wine List</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Events</a>
          <a href="#" className="hover:text-amber-600 transition-colors text-amber-600 border-b-2 border-amber-600">Reservations</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/port-restaurant.png" 
          alt="Restaurant interior" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center text-white px-4">
          <p className="font-sans uppercase tracking-[0.3em] mb-4 text-sm font-bold">Authentic Flavors of Tuscany</p>
          <h2 className="text-6xl md:text-8xl font-bold mb-8">Elegance in Every Bite</h2>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 font-sans font-bold uppercase tracking-widest transition-colors">
            Book a Table
          </button>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic">The Autumn Menu</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
          {[
            { name: "Calamari Fritti", price: "$18", desc: "Crispy squid, spicy marinara, lemon aioli" },
            { name: "Bistecca alla Fiorentina", price: "$45", desc: "Grilled T-bone, rosemary, garlic, extra virgin olive oil" },
            { name: "Wild Mushroom Risotto", price: "$28", desc: "Arborio rice, porcini, truffle oil, parmigiano" },
            { name: "Osso Buco", price: "$38", desc: "Braised veal shanks, gremolata, saffron risotto" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between border-b border-gray-200 pb-4">
              <div className="pr-4">
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm italic font-serif">{item.desc}</p>
              </div>
              <span className="font-bold text-amber-700">{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-amber-600 font-sans font-bold border-2 border-amber-600 px-8 py-3 hover:bg-amber-600 hover:text-white transition-all">
            View Full Menu
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-8 text-center font-sans">
        <h2 className="text-3xl font-serif italic font-bold mb-8">Bella Notte</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
          123 Culinary Way, Downtown District<br />
          Open Nightly from 5:00 PM
        </p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantDemo;
