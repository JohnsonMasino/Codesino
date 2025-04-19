import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const message = form[2].value;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setIsModalOpen(false);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="hero-image">
        <div className="hero-left">
          <h1 className="hero-headline">We Build. We Design. We Deliver.</h1>
          <p className="hero-subtext">
            Codesino is your all-in-one software powerhouse—delivering stunning
            websites, cutting-edge mobile apps, immersive graphics, and secure global
            exchanges. Join us to shape the future with tech.
          </p>
          <div className="button-group">
            <a href="/services" className="hero-btn">
              Explore Services
            </a>
            <button className="hero-btn secondary" onClick={toggleModal}>
              Send a Request
            </button>
          </div>
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

      {/* Global Success Message */}
      {successMessage && (
        <div className="global-success-message">{successMessage}</div>
      )}

      {/* Global Error Message */}
      {errorMessage && (
        <div className="global-error-message">{errorMessage}</div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="contact-container w-full max-w-md mx-auto px-4">
            <div className="contact-form">
              <h2 className="contact-title">Schedule a Proposal</h2>
              <form className="contact-form-body" onSubmit={handleSubmit}>
                <div className="input-group">
                  <User className="input-icon" size={24} />
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <Mail className="input-icon" size={24} />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="input-group textarea-group">
                  <MessageCircle className="input-icon" size={24} />
                  <textarea placeholder="What do you need?" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
              <button className="close-modal-btn" onClick={toggleModal}>
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroWithSlider;
