import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageWithText = () => {
    const slides = [
        {
            image: "/domain.jpeg",
            heading: "Expertise Across Multiple Domains",
            text: "From Website & Web App Development to Mobile App Development and Cloud Services, we specialize in building powerful, scalable, and user-friendly digital solutions tailored to your business needs.",
        },
        {
            image: "/creative.webp",
            heading: "Creative Excellence",
            text: "We bring ideas to life with Product & Graphics Design, Motion Graphics, and 3D Animation, ensuring your brand makes a lasting impression in a competitive digital world.",
        },
        {
            image: "/future.avif",
            heading: "Future-Proof Technology",
            text: "Technology evolves rapidly, and so do we. Our team stays ahead of the curve, integrating AI-driven solutions, blockchain technology, and cloud innovations to give your business a competitive edge.",
        },
        {
            image: "/finance1.jpg",
            heading: "Seamless Financial Transactions",
            text: "With our expertise in Crypto, PayPal, and Fiat Exchange services, we simplify digital transactions, making it easier for businesses and individuals to operate in a global economy.",
        },
        {
            image: "/train.jpg",
            heading: "Industry-Leading Training Programs",
            text: "We don’t just build software—we build software engineers. Our Software Development Training programs empower aspiring developers with the skills needed to excel in the tech industry.",
        },
        {
            image: "/customer.webp",
            heading: "Client-Centric Approach",
            text: "Your success is our priority. We work closely with you to understand your goals, ensuring we deliver customized solutions that meet and exceed expectations.",
        },
        {
            image: "/record.webp",
            heading: "Proven Track Record",
            text: "From startups to enterprises, we have successfully delivered high-impact solutions that have helped businesses scale, innovate, and dominate their markets.",
        },
        {
            image: "/commit.jpg",
            heading: "Commitment to Excellence",
            text: "Every project we undertake is backed by precision, innovation, and dedication. We don’t cut corners—we build solutions that stand the test of time.",
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="whyus-container">
            <h3 className="whyus-title">Why Choose Us?</h3>
            <p className="whyus-description">
            At Codesino Dev, we build digital solutions that drive real results.
            From web and mobile apps to AI-powered systems and payment
            integrations, our tech accelerates your business growth. We don’t
            just develop software—we deliver impact. Know more about our strengths
            below.
            </p>

            <div className="carousel-container-why">
                <button className="carousel-arrow left" onClick={prevSlide}>
                    &#8592;
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="whyus-slide"
                    >
                        <div className="whyus-image-wrapper">
                            <img src={slides[current].image} alt={slides[current].heading} className="whyus-image" />
                        </div>

                        <div className="whyus-text-wrapper">
                            <h3 className="whyus-heading">{slides[current].heading}</h3>
                            <p className="whyus-text">{slides[current].text}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button className="carousel-arrow right" onClick={nextSlide}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default ImageWithText;

