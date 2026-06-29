import React from 'react';

const SalonDemo = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Demo Header */}
      <div className="bg-indigo-600 text-white py-2 px-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-sm font-medium">Live Demo: Lumina Hair Studio</span>
        <button 
          onClick={onClose}
          className="bg-white text-indigo-600 px-3 py-1 rounded text-sm font-bold hover:bg-indigo-50 transition-colors"
        >
          &larr; Back to Portfolio
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <div className="text-2xl font-black tracking-tighter uppercase">Lumina</div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#" className="hover:text-pink-500 transition-colors">Services</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Stylists</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Gallery</a>
          <button className="bg-black text-white px-6 py-2 hover:bg-pink-600 transition-colors">Book Now</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-pink-50">
          <h2 className="text-6xl lg:text-8xl font-black leading-tight mb-8">ELEVATE<br/>YOUR<br/>STYLE</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-md">Modern hair artistry in the heart of the city. We don't just cut hair, we create confidence.</p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors">Book Online</button>
            <button className="border-2 border-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Our Services</button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img 
            src="/port-salon.png" 
            alt="Hair styling session" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Couture Cut", price: "From $85", desc: "Consultation, precision cut, and signature blowout." },
            { name: "Artisanal Color", price: "From $120", desc: "Bespoke color services including Balayage and Foilayage." },
            { name: "Revitalize Therapy", price: "From $45", desc: "Intensive repair treatments for damaged or dry locks." }
          ].map((service, i) => (
            <div key={i} className="p-8 border-2 border-gray-100 hover:border-pink-200 transition-colors bg-white group">
              <div className="w-12 h-1 bg-pink-500 mb-6 group-hover:w-full transition-all"></div>
              <h3 className="text-xl font-black mb-2 uppercase">{service.name}</h3>
              <p className="text-gray-500 mb-6">{service.desc}</p>
              <span className="font-bold text-lg text-pink-600">{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Ready for a transformation?</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">Join our community of style-forward clients. New customers receive a complimentary treatment on their first visit.</p>
        <button className="bg-white text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">Find a Stylist</button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="font-black text-black text-xl mb-4 md:mb-0">LUMINA.</div>
        <p>© 2024 Lumina Hair Studio. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 uppercase font-bold tracking-widest text-xs">
          <a href="#" className="hover:text-pink-500">IG</a>
          <a href="#" className="hover:text-pink-500">FB</a>
          <a href="#" className="hover:text-pink-500">TK</a>
        </div>
      </footer>
    </div>
  );
};

export default SalonDemo;
