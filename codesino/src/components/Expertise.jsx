import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  const expertiseData = [
    { activity: 'Innovation& Creativity 🚀', percentage: 85 },
    { activity: 'Excellence & Good Quality 💎', percentage: 90 },
    { activity: 'Collaboration & Good Growth 🤝', percentage: 95 },
    { activity: 'Customer Focused 🎯', percentage: 100 },
  ];

  const expertiseDetails = {
    Innovation: {
      value: 85,
      description:
        'At Codesino, we foster creativity by developing cutting-edge, scalable solutions that drive technological advancement and innovation.',
    },
    Excellence: {
      value: 90,
      description:
        'We prioritize high-quality, efficient, and maintainable code, ensuring the best user experience and seamless performance.',
    },
    Collaboration: {
      value: 95,
      description:
        'We believe in teamwork and knowledge sharing, working together to build impactful digital solutions and empower the tech community.',
    },
    CustomerFocus: {
      value: 100,
      description:
        'Our solutions are tailored to meet real-world needs, providing technology that enhances user experience and business growth.',
    },
  };

  const [counts, setCounts] = useState({
    innovation: 0,
    excellence: 0,
    collaboration: 0,
    customerFocus: 0,
  });

  const { ref: containerRef, inView } = useInView({ threshold: 0.2 });
  const { ref: countRef, inView: countInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (countInView) {
      const innovationInterval = animateCount('innovation', expertiseDetails.Innovation.value);
      const excellenceInterval = animateCount('excellence', expertiseDetails.Excellence.value);
      const collaborationInterval = animateCount('collaboration', expertiseDetails.Collaboration.value);
      const customerFocusInterval = animateCount('customerFocus', expertiseDetails.CustomerFocus.value);

      return () => {
        clearInterval(innovationInterval);
        clearInterval(excellenceInterval);
        clearInterval(collaborationInterval);
        clearInterval(customerFocusInterval);
      };
    }
  }, [countInView]);

  const animateCount = (type, target) => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newValue = prevCounts[type] + Math.ceil(target / 100);
        if (newValue >= target) {
          clearInterval(interval);
          return { ...prevCounts, [type]: target };
        }
        return { ...prevCounts, [type]: newValue };
      });
    }, 30);
    return interval;
  };

  return (
    <div className="expertise-wrapper">
      <h3 className="section-title">Our Core Values</h3>
      <div className="expertise-content">
        <div className="expertise-description">
          <h2 className="quote">
            "Empowering innovation, bridging learning with real-world tech, and building scalable
            digital solutions for the future. At Codesino, we turn ideas into impact." 🚀
          </h2>
          <h2 className="quote">
            "Building the future with code—scalable apps, innovative solutions, and real-world
            tech empowerment. At Codesino, we make technology work for you."
          </h2>
          <h2 className="quote">
            "Innovate. Educate. Elevate. At Codesino, we develop solutions that empower
            businesses, developers, and the future of technology." 🚀
          </h2>
        </div>

        <div className="bar-container" ref={containerRef}>
          <div className="bar-grid">
            {expertiseData.map((data, index) => (
              <div key={index} className="bar-item">
                <div className="bar-outer">
                  <div
                    className="bar-inner"
                    style={{ height: inView ? `${data.percentage}%` : '0%' }}
                  >
                    {data.percentage}%
                  </div>
                </div>
                <span className="bar-label">{data.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="percentage-section" ref={countRef}>
        <div className="percentage-cards">
          {Object.entries(expertiseDetails).map(([key, value]) => (
            <div key={key} className="percentage-card">
              <p className="percentage-value">
                {counts[key.charAt(0).toLowerCase() + key.slice(1)]}%
              </p>
              <h4 className="percentage-title">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
              <p className="percentage-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;

