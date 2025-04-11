import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SubscriptionForm from './SubscriptionForm';
import { useNavigate } from 'react-router-dom';

const socials = [
  {
    id: 1,
    icon: <Facebook />,
    link: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: <Twitter />,
    link: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: <Instagram />,
    link: 'https://www.instagram.com',
  },
  {
    id: 4,
    icon: <Linkedin />,
    link: 'https://www.linkedin.com',
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer-container bg-gray-900 text-white py-10">
      {/* Newsletter Subscription */}
      <SubscriptionForm />

      {/* Footer Content */}
      <div className="py-8 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Contact Us */}
        <div className="footer-contact">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Contact Us</h3>
          <p className="text-start text-gray-400">Email: contact@example.com</p>
          <p className="text-start text-gray-400">Phone: +123 456 7890</p>
          <p className="text-start text-gray-400">Address: 123 Street, City, Country</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Quick Links</h3>
          <ul className="text-start text-gray-400 space-y-2">
            <li><a onClick={() => handleNavigation('/')} className="hover:text-white cursor-pointer">Home</a></li>
            <li><a onClick={() => handleNavigation('/about')} className="hover:text-white cursor-pointer">About</a></li>
            <li><a onClick={() => handleNavigation('/services')} className="hover:text-white cursor-pointer">Services</a></li>
            <li><a onClick={() => handleNavigation('/contact')} className="hover:text-white cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Legal Information */}
        <div className="footer-links">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Legal Information</h3>
          <ul className="text-start text-gray-400 space-y-2">
            <li><a onClick={() => handleNavigation('/privacy-policy')} className="hover:text-white cursor-pointer">Privacy Policy</a></li>
            <li><a onClick={() => handleNavigation('/cookie-policy')} className="hover:text-white cursor-pointer">Cookie Policy</a></li>
            <li><a onClick={() => handleNavigation('/terms-and-conditions')} className="hover:text-white cursor-pointer">Terms of Service</a></li>
          </ul>
        </div>

        {/* Follow Us / Social Media Links */}
        <div className="footer-social">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Follow Us</h3>
          <div className="flex space-x-4">
            {socials.map((social) => (
              <a key={social.id} href={social.link} className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Codesino. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
