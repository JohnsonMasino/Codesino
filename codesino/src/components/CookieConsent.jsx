import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import logo from '../assets/images/logo.png';
import { loadGoogleAnalytics } from '../utils/Analytics';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookie_consent']);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    if (cookies.cookie_consent === 'true') {
      loadGoogleAnalytics();
      return;
    }

    const timer = setTimeout(() => {
      if (!cookies.cookie_consent) setShowBanner(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [cookies]);

  const handleConsent = (accept) => {
    const maxAge = accept ? 60 * 60 * 24 * 365 : 60 * 45;
    setCookie('cookie_consent', accept ? 'true' : 'false', {
      path: '/',
      maxAge,
    });
    setShowBanner(false);

    if (accept) {
      loadGoogleAnalytics();
      console.log('✅ Cookies accepted');
    } else {
      console.log('❌ Cookies declined');
    }
  };

  if (!showBanner) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1A0026] to-[#2A003E] text-white p-6 z-50 flex flex-col shadow-lg rounded-t-xl"
      data-aos="fade-up"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 25 }}
    >
      {/* Logo at the top center */}
      <div className="flex justify-center mb-4">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* Content container for text and buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="text-lg font-semibold mb-4 sm:mb-0 sm:max-w-[70%]">
          <p>
            We use cookies to improve your experience on our site, personalize content, and analyze our traffic. By accepting, you consent to the use of cookies for better performance and more relevant content.
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-center sm:justify-end">
          <button
            onClick={() => handleConsent(true)}
            className="bg-amber-50 hover:bg-black text-black hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="bg-red-600 hover:bg-red-900 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;