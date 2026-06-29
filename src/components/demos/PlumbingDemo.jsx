import React from 'react';

const PlumbingDemo = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Demo Header */}
      <div className="bg-indigo-600 text-white py-2 px-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-sm font-medium tracking-tight">Live Demo: Apex Plumbing Co.</span>
        <button 
          onClick={onClose}
          className="bg-white text-indigo-600 px-3 py-1 rounded text-sm font-bold hover:bg-indigo-50 transition-colors shadow-sm"
        >
          &larr; Back to Portfolio
        </button>
      </div>

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-8 flex justify-between items-center text-xs font-bold uppercase tracking-wide">
        <div className="flex space-x-6">
          <span>24/7 Emergency Service</span>
          <span>Licensed & Insured</span>
        </div>
        <a href="tel:5550123" className="text-yellow-400">Call Now: (555) 012-3456</a>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-6 px-8 flex justify-between items-center border-b border-slate-200 sticky top-9 z-40 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 p-2 rounded-lg text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-2xl font-black italic tracking-tighter text-blue-900">APEX PLUMBING</span>
        </div>
        <div className="hidden lg:flex space-x-10 font-bold uppercase text-xs tracking-widest text-slate-600">
          <a href="#" className="hover:text-blue-700">Residential</a>
          <a href="#" className="hover:text-blue-700">Commercial</a>
          <a href="#" className="hover:text-blue-700">Water Heaters</a>
          <a href="#" className="hover:text-blue-700">Drain Cleaning</a>
        </div>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-800 shadow-md">Book Service</button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-8 overflow-hidden bg-slate-900">
        <img 
          src="/port-trades.png" 
          alt="Professional Plumber" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Your local experts for <span className="text-blue-400">pipe & drain</span> emergencies</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Fast, reliable, and affordable plumbing solutions for homes and businesses. Guaranteed workmanship and upfront pricing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-lg font-black uppercase text-sm tracking-widest hover:bg-yellow-500 transition-all shadow-lg">Schedule Repair</button>
            <button className="bg-white text-blue-900 px-10 py-5 rounded-lg font-black uppercase text-sm tracking-widest hover:bg-slate-100 transition-all shadow-lg">Our Reviews</button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white py-12 px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-60">
          <div className="flex items-center space-x-2 font-bold text-xl">BBB ACCREDITED</div>
          <div className="flex items-center space-x-2 font-bold text-xl">GOOGLE GUARANTEED</div>
          <div className="flex items-center space-x-2 font-bold text-xl">ANGI RECOMMENDED</div>
          <div className="flex items-center space-x-2 font-bold text-xl">5-STAR RATED</div>
        </div>
      </div>

      {/* Service List */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-blue-700 font-bold uppercase tracking-widest text-xs mb-4">Complete Solutions</h2>
            <h3 className="text-4xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">No job too big, <br/>no leak too small.</h3>
          </div>
          <p className="text-slate-500 max-w-md">From leaky faucets to full sewer line replacements, we handle every aspect of your plumbing system with care and expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Repiping", desc: "Whole-home copper or PEX repiping services." },
            { title: "Sewer Repair", desc: "Trenchless sewer line replacement and repair." },
            { title: "Gas Lines", desc: "Expert gas line installation and leak detection." },
            { title: "Hydro Jetting", desc: "High-pressure clearing of severe drain blockages." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="text-blue-700 font-bold text-xs uppercase tracking-widest hover:underline">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-white text-2xl font-black italic tracking-tighter mb-6 block">APEX PLUMBING</span>
            <p className="text-sm leading-relaxed">Dedicated to providing premium plumbing services with honesty and integrity. Locally owned and operated since 1998.</p>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Service Areas</h5>
            <ul className="text-sm space-y-3">
              <li>Downtown & Metro</li>
              <li>Northside Suburbs</li>
              <li>Valley Heights</li>
              <li>West Coast District</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Connect</h5>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlumbingDemo;
