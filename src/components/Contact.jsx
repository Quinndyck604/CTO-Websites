import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-900 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Get a free consultation and a custom mockup for your business. We'll show you exactly how we can help you grow.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span>No-obligation consultation</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span>Custom design mockup in 48 hours</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <span>Full launch in under a week</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full bg-white p-8 rounded-2xl shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Business Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="Your Business" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition h-32" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
