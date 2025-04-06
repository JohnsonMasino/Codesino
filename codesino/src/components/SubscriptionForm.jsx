import React from 'react';

const SubscriptionForm = () => {
  return (
    <div className="footer-newsletter py-8 px-4 md:px-6 max-w-7xl mx-auto text-white">
      <div className="flex justify-start">
        <div className="text-start max-w-lg">
          <h3 className="text-2xl font-semibold mb-3">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
          <div className="flex items-center rounded-lg overflow-hidden max-w-md w-full shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;