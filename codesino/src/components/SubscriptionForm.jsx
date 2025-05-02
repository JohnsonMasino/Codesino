import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        setErrorMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="footer-newsletter py-8 px-4 md:px-6 max-w-7xl mx-auto text-white">
      <div className="flex justify-start">
        <div className="text-start w-full max-w-lg">
          <h3 className="text-2xl font-semibold mb-3">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
          <form onSubmit={handleSubscribe}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-lg overflow-hidden w-full shadow-sm space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-md sm:rounded-none sm:rounded-l-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-[#2A003E] text-white px-6 py-3 transition-colors duration-200 rounded-md sm:rounded-none sm:rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="global-success-message mt-4 text-green-400">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="global-error-message mt-4 text-red-400">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
