import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Website | Web App Development",
    image: "/webapp.webp",
    description:
      "This breathtaking landscape captures the essence of nature's beauty. A perfect escape into tranquility and peace.",
  },
  {
    title: "Mobile App Development",
    image: "/mobile1.png",
    description:
      "Experience the architectural beauty and the blend of history with modern elegance.",
  },
  {
    title: "Cloud Services",
    image: "/cloud.webp",
    description:
      "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
  },
  {
    title: "Product | Graphics Design",
    image: "/product.avif",
    description:
      "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
  },
  {
    title: "Motion Graphics | 3D Animation",
    image: "/3d.gif",
    description:
      "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
  },
  {
    title: "Software Development Training",
    image: "/training.png",
    description:
      "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
  },
  {
    title: "Crypto | Paypal | Fiat Exchange",
    image: "/crypto.avif",
    description:
      "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
  },
];

const HeroWithSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero-image">
      <div className="hero-left">
        <h1 className="hero-headline">We Build. We Design. We Deliver.</h1>
        <p className="hero-subtext">
          Codesino is your all-in-one software powerhouse—delivering stunning websites, cutting-edge mobile apps,
          immersive graphics, and secure global exchanges. Join us to shape the future with tech.
        </p>
        <a href="/services" className="hero-btn">
          Explore Services
        </a>
      </div>

      <div className="hero-right hero-slider-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="hero-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="hero-img"
            />
            <div className="slide-text">
              <h3 className="slide-title">{slides[currentIndex].title}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroWithSlider;
