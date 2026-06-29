import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RestaurantDemo from './components/demos/RestaurantDemo';
import SalonDemo from './components/demos/SalonDemo';
import PlumbingDemo from './components/demos/PlumbingDemo';

function App() {
  const [currentDemo, setCurrentDemo] = useState(null);

  const closeDemo = () => {
    setCurrentDemo(null);
    window.scrollTo(0, 0);
  };

  if (currentDemo === 'restaurant') return <RestaurantDemo onClose={closeDemo} />;
  if (currentDemo === 'salon') return <SalonDemo onClose={closeDemo} />;
  if (currentDemo === 'plumbing') return <PlumbingDemo onClose={closeDemo} />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio onOpenDemo={setCurrentDemo} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
