import React from 'react';

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

    return (
        <div className="ourmission-container">
            <h3 className="ourmission-title">Our Mission</h3>

            <div className="ourmission-grid">
                {strengths.map((strength, index) => (
                    <div key={index} className="ourmission-card">
                        <img
                            src={strength.image}
                            alt={strength.title}
                            className="ourmission-image"
                        />
                        <h4 className="ourmission-heading">{strength.title}</h4>
                        <p className="ourmission-description">{strength.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;
