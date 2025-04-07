import React, { useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaCogs, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const AboutInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaLaptopCode size={32} />, 
      title: "Web App Development", 
      description: "Modern, scalable, and secure web applications built for performance and user experience.",
      link: "/services/web-app-development"
    },
    {
      icon: <FaMobileAlt size={32} />, 
      title: "Mobile App Development", 
      description: "Cross-platform mobile apps that are fast, elegant, and user-friendly.",
      link: "/services/mobile-app-development"
    },
    {
      icon: <FaBullhorn size={32} />, 
      title: "Ads & Marketing", 
      description: "ROI-focused campaigns and digital marketing strategies that convert.",
      link: "/services/ads-marketing"
    },
    {
      icon: <FaCogs size={32} />, 
      title: "API Development", 
      description: "Robust and scalable APIs built with best practices for your app ecosystem.",
      link: "/services/api-development"
    },
    {
      icon: <FaRocket size={32} />, 
      title: "Product Development", 
      description: "We help ideate, design, build, and launch your product from the ground up.",
      link: "/services/product-development"
    },
  ];

  return (
    <div className="bg-[#f9fafb] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A0026] to-[#2A003E] text-white py-20 px-6 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">We Build Digital Solutions That Drive Results</h1>
        <p className="text-xl max-w-3xl mx-auto">
          From innovative web and mobile apps to powerful APIs and strategic ad campaigns — we turn ideas into high-impact products.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim nulla sed metus cursus, eget tristique orci tincidunt. Vivamus nec viverra leo, ac consequat quam. We are a team of tech lovers, thinkers, and creators passionate about digital excellence.
        </p>
      </section>

      {/* What We Do - Services */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              onClick={() => navigate(service.link)}
            />
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center" data-aos="fade-up">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          <ul className="space-y-6">
            <li><strong>1. Discovery:</strong> Understanding your goals and challenges.</li>
            <li><strong>2. Research:</strong> Analyzing user needs and market trends.</li>
            <li><strong>3. Strategy:</strong> Crafting a roadmap and defining success metrics.</li>
            <li><strong>4. Design:</strong> Creating intuitive and visually engaging UI/UX.</li>
          </ul>
          <ul className="space-y-6">
            <li><strong>5. Development:</strong> Iterative building with feedback loops.</li>
            <li><strong>6. Testing:</strong> Rigorous QA for performance, usability, and security.</li>
            <li><strong>7. Launch:</strong> Deploying your solution with precision and support.</li>
            <li><strong>8. Optimization:</strong> Monitoring and enhancing post-launch results.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#1A0026] to-[#2A003E] text-white py-16 text-center px-6" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-4">Let’s Build Something Amazing Together</h2>
        <p className="text-lg mb-6">Have a project in mind or want to collaborate? We’d love to hear from you.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl p-6 shadow-md text-center cursor-pointer"
    data-aos="fade-up"
    onClick={onClick}
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

export default AboutInfo;
