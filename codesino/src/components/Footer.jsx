import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Link Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-2/3">
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
              <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-pink-500">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/web-development" className="hover:text-gray-400">Web Development</Link></li>
              <li><Link to="/seo" className="hover:text-gray-400">SEO Optimization</Link></li>
              <li><Link to="/marketing" className="hover:text-gray-400">Digital Marketing</Link></li>
              <li><Link to="/consulting" className="hover:text-gray-400">Tech Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-500">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-400">Terms of Service</Link></li>
              <li><Link to="/support" className="hover:text-gray-400">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4 text-pink-500">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-r hover:brightness-110">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center container mx-auto px-6">
        <div className="flex space-x-6 text-gray-400">
          <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Codesino Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




// This is my footer component:

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
//         {/* Link Grids */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-2/3">
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-blue-500">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
//               <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
//               <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
//               <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-pink-500">Services</h3>
//             <ul className="space-y-2">
//               <li><Link to="/web-development" className="hover:text-gray-400">Web Development</Link></li>
//               <li><Link to="/seo" className="hover:text-gray-400">SEO Optimization</Link></li>
//               <li><Link to="/marketing" className="hover:text-gray-400">Digital Marketing</Link></li>
//               <li><Link to="/consulting" className="hover:text-gray-400">Tech Consulting</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-blue-500">Resources</h3>
//             <ul className="space-y-2">
//               <li><Link to="/faq" className="hover:text-gray-400">FAQs</Link></li>
//               <li><Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="hover:text-gray-400">Terms of Service</Link></li>
//               <li><Link to="/support" className="hover:text-gray-400">Support</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="w-full md:w-1/3 mt-6 md:mt-0">
//           <h3 className="text-lg font-bold mb-4 text-pink-500">Subscribe to our Newsletter</h3>
//           <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 rounded-l bg-gray-800 text-white focus:outline-none"
//             />
//             <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-r hover:brightness-110">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center container mx-auto px-6">
//         <div className="flex space-x-6 text-gray-400">
//           <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
//           <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
//           <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
//           <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
//         </div>
//         <p className="text-gray-500 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Codesino Dev. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// I want it to stick to the bottom of my homepage where I imported itThe header sticks to thwe top but this footer hangs just below the header instead of hanging down at the bottom of the page.