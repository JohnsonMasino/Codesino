import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImageWithText = () => {
    const slides = [
        {
            title: "Website | Web App Development",
            image: "/webapp.webp",
            description: "This breathtaking landscape captures the essence of nature's beauty. A perfect escape into tranquility and peace.",
        },
        {
            title: "Mobile App Development",
            image: "/mobile1.png",
            description: "Experience the architectural beauty and the blend of history with modern elegance.",
        },
        {
            title: "Cloud Services",
            image: "/cloud.webp",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Product | Graphics Design",
            image: "/product.avif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Motion Graphics | 3D Animation",
            image: "/3d.gif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Software Development Training",
            image: "/training.png",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Crypto | Paypal | Fiat Exchange",
            image: "/crypto.avif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="service-carousel-wrapper">
            <h3 className="service-carousel-title">
                Take a Quick Glimpse Of Our Services
            </h3>

            {/* ✅ Slide Container with relative position */}
            <div className="carousel-slide-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="service-carousel-card"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                className="service-carousel-image"
                            />
                        </div>

                        <div className="service-carousel-text w-full md:w-1/2">
                            <h2 className="service-carousel-title-text">
                                {slides[currentIndex].title}
                            </h2>
                            <p className="service-carousel-description">
                                {slides[currentIndex].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ImageWithText;
