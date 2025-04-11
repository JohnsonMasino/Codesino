import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

    return (
        <div className="whyus-container">
            <h3 className="whyus-title">Why Choose Us?</h3>

            <p className="whyus-description">
                At Codesino Dev, we are passionate about crafting innovative digital solutions that drive business success. As a software
                development company, we specialize in building scalable web applications, mobile solutions, and AI-powered technologies tailored to modern business needs.
                Our team of expert developers, designers, and tech strategists are dedicated to delivering high-performance, user-friendly, and future-proof software.
                Beyond development, we empower the next generation of tech professionals through cutting-edge training programs, bridging the gap between learning and
                real-world application. With a client-centric approach and a commitment to excellence, Codesino Dev is your trusted partner in technology, innovation,
                and digital transformation. Know more about our strengths below.
            </p>

            {slides.map((item, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        className="whyus-slide"
                    >
                        {/* Image Section */}
                        <div className="whyus-image-wrapper">
                            <img src={item.image} alt={item.heading} className="whyus-image" />
                        </div>

                        {/* Text Section */}
                        <div className="whyus-text-wrapper">
                            <h3 className="whyus-heading text-gray-800">{item.heading}</h3>
                            <p className="whyus-text">{item.text}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ImageWithText;
