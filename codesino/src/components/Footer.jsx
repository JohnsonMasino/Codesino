import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SubscriptionForm from './SubscriptionForm';

const Footer = () => {
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
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Legal Information */}
        <div className="footer-links">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Legal Information</h3>
          <ul className="text-start text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Follow Us / Social Media Links */}
        <div className="footer-social">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
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