import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/main.css'; // Assuming you have a CSS file for styling
import SubscriptionForm from './SubscriptionForm';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <>
    <footer className="footer-container bg-gray-900 text-white py-10 px-6">
        {/* Newsletter Subscription */}
        <SubscriptionForm />    
      <div className="footer-content max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Brand Info */}
        <div className="footer-brand">
          <h2 className="text-2xl font-bold mb-2">BrandName</h2>
          <p>Your tagline or a short description.</p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-start text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div className="footer-contact">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-start text-gray-400">Email: contact@example.com</p>
          <p className="text-start text-gray-400">Phone: +123 456 7890</p>
          <p className="text-start text-gray-400">Address: 123 Street, City, Country</p>
        </div>
        
        {/* Follow Us / Social Media Links */}
        <div className="footer-social">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-4">
        <p>&copy; {new Date().getFullYear()} Codesino. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
