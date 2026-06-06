import React from 'react';
import { Layout, Smartphone, Zap, PenTool } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Custom Design",
      description: "Tailored websites that match your brand identity and speak to your local audience."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Every site is optimized for phones and tablets, ensuring a perfect experience everywhere."
    },
    {
      icon: Zap,
      title: "Rapid Launch",
      description: "Get your business online in as little as 3-5 days with our AI-enhanced workflow."
    },
    {
      icon: PenTool,
      title: "AI Content",
      description: "High-quality copy and imagery generated specifically for your niche and location."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to succeed online, without the complexity or high costs of traditional agencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
