import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const OurMission = () => {
    const strengths = [
        {
            title: 'Software Development',
            description: 'Build scalable and innovative web and mobile applications.',
            image: '/software.jpg'
        },
        {
            title: 'Emerging Technologies',
            description: 'Leverage AI and blockchain technologies for future-proof solutions.',
            image: '/emerging.jpg'
        },
        {
            title: 'FinTech Solutions',
            description: 'Deliver seamless financial transaction solutions, including crypto and fiat exchange.',
            image: '/fintech.png'
        },
        {
            title: 'Education',
            description: 'Provide top-tier software development training programs.',
            image: '/education.webp'
        },
        {
            title: 'Skill Empowerment',
            description: 'Empower aspiring developers with real-world technical skills.',
            image: '/empower.webp'
        },
        {
            title: 'Client-Centric Solution',
            description: 'Foster a client-centric approach for tailored digital solutions.',
            image: '/centric.jpeg'
        },
        {
            title: 'Business Growth & Strategy',
            description: 'Drive business growth through cutting-edge tech strategies.',
            image: '/growth.jpg'
        },
        {
            title: 'Excellence & Innovation',
            description: 'Maintain excellence, precision, and innovation in every project.',
            image: '/innovation.webp'
        },
        {
            title: 'Practical Learning',
            description: 'Bridge the gap between learning and practical application in tech.',
            image: '/practical.jpg'
        },
        {
            title: 'Business Scaling & Innovation',
            description: 'Help businesses scale, innovate, and dominate their industries.',
            image: '/scaling.webp'
        },
        {
            title: 'Custom Solutions & Integration',
            description: 'Design and integrate custom digital solutions tailored to unique business needs.',
            image: '/custom.jpg'
        },
        {
            title: 'Community Engagement',
            description: 'Cultivate a thriving tech community through events, mentorship, and collaboration.',
            image: '/community.webp'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strengths.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? strengths.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="ourmission-carousel-wrapper">
            <h3 className="ourmission-title">Our Mission</h3>

            <div className="carousel-slide-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="ourmission-card slide-card"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img
                            src={strengths[currentIndex].image}
                            alt={strengths[currentIndex].title}
                            className="ourmission-image"
                        />
                        <h4 className="ourmission-heading">{strengths[currentIndex].title}</h4>
                        <p className="ourmission-description">{strengths[currentIndex].description}</p>
                    </motion.div>
                </AnimatePresence>

                <div className="ourmission-buttons">
                    <button onClick={handlePrev} className="ourmission-nav-btn">Previous</button>
                    <button onClick={handleNext} className="ourmission-nav-btn">Next</button>
                </div>
            </div>
        </section>
    );
};

export default OurMission;

