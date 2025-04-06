// SubscriptionForm.js
import React from 'react';

const SubscriptionForm = () => {
  return (
    <div className="footer-newsletter py-6 text-white">
      <div className="max-w-6xl mx-auto flex justify-start"> {/* Aligned to the left */}
        <div className="text-start">
          <h3 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-3">Stay updated with our latest news and offers.</p>
          <div className="flex items-center rounded-lg overflow-hidden max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 outline-none text-gray-800" 
            />
            <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
