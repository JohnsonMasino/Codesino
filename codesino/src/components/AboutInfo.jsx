import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaCogs,
  FaRocket,
  FaCloud,
  FaPaintBrush,
  FaFilm,
  FaGraduationCap,
  FaExchangeAlt,
} from 'react-icons/fa';
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
      link: "/services",
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps that are fast, elegant, and user-friendly.",
      link: "/services",
    },
    {
      icon: <FaCogs size={32} />,
      title: "API Development",
      description: "Robust and scalable APIs built with best practices for your app ecosystem.",
      link: "/services",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Product Development",
      description: "We help ideate, design, build, and launch your product from the ground up.",
      link: "/services",
    },
    {
      icon: <FaCloud size={32} />,
      title: "Cloud Services",
      description: "Deploy and manage applications securely on AWS, GCP, and Azure for scalability and efficiency.",
      link: "/services",
    },
    {
      icon: <FaPaintBrush size={32} />,
      title: "Product & Graphics Design",
      description: "From branding to UI/UX, we create visuals that communicate your value with clarity and beauty.",
      link: "/services",
    },
    {
      icon: <FaFilm size={32} />,
      title: "Motion Graphics & 3D Animation",
      description: "Explainer videos, intros, and visual stories brought to life with motion and 3D.",
      link: "/services",
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: "Software Dev Training",
      description: "Hands-on training for beginners and intermediates in full-stack development.",
      link: "/services",
    },
    {
      icon: <FaExchangeAlt size={32} />,
      title: "Crypto | PayPal | Fiat Exchange",
      description: "Fast, secure currency exchange services for crypto, PayPal, and fiat transactions.",
      link: "/services",
    },
  ];

  return (
    <section className="services-section py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 mt-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => navigate(service.link)}
            >
              <div className="mb-4 text-indigo-600">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
