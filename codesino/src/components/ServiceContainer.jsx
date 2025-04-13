import React, { useState } from "react";

const services = [
  {
    title: "Website | Web App Development",
    image: "/web.jpg",
    description:
      "A stunning website or web application is the digital face of your brand. We craft responsive, fast, and SEO-optimized solutions tailored to your goals. Whether it's a landing page or a complex SaaS platform, we ensure your brand stands out and converts. Our team has successfully delivered robust web platforms trusted by startups and growing businesses alike.",
  },
  {
    title: "Mobile App Development",
    image: "/app.png",
    description:
      "Reach your users on-the-go with native and cross-platform mobile apps. We design sleek, intuitive experiences for both iOS and Android using modern tools. From MVPs to enterprise-grade apps, our mobile solutions ensure performance, scalability, and top-tier user experience.",
  },
  {
    title: "Cloud Services",
    image: "/cloud.jpg",
    description:
      "Scale smarter with our cloud expertise. We deploy and manage your applications on secure and scalable infrastructure including AWS, GCP, and Azure. With cost-effective architecture and 24/7 reliability, our cloud services empower your business to grow seamlessly.",
  },
  {
    title: "Product | Graphics Design",
    image: "/graphic.jpg",
    description:
      "First impressions matter. We create stunning product and brand visuals that resonate with your audience. Whether it’s mockups, marketing creatives, or UI/UX, our design solutions communicate your value with style and clarity.",
  },
  {
    title: "Motion Graphics | 3D Animation",
    image: "/image.gif",
    description:
      "Bring your ideas to life with powerful visual storytelling. Our motion graphics and 3D animation services are perfect for ads, explainers, intros, and immersive experiences that captivate and convert.",
  },
  {
    title: "Software Development Training",
    image: "/tech-training.png",
    description:
      "Learn software development from real developers. Our hands-on training program is tailored for beginners and intermediates looking to upskill and build real-world projects. We guide you through web, mobile, and backend development with practical sessions.",
  },
  {
    title: "Crypto | Paypal | Fiat Exchange",
    image: "/fiat.png",
    description:
      "We provide secure and reliable exchange services for Crypto, PayPal, and fiat currencies. Whether you’re converting for business, travel, or investment, our trusted system ensures swift transactions and transparent rates.",
  },
];

const ServiceSection = ({ title, image, description, onRequestClick }) => (
  <section className="service-section">
    <div className="image-container">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
    </div>
    <div className="service-content">
      <p>{description}</p>
      <button className="request-btn" onClick={() => onRequestClick(title)}>
        Make A Request
      </button>
    </div>
  </section>
);

const ServiceContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentService, setCurrentService] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleRequestClick = (serviceTitle) => {
    setCurrentService(serviceTitle);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setSuccessMessage("Request submitted successfully!");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccessMessage(""), 4000); // Clear after 4s
  };

  return (
    <div className="services-page">
      {successMessage && <div className="global-success-message">{successMessage}</div>}

      {services.map((service, index) => (
        <ServiceSection
          key={index}
          {...service}
          onRequestClick={handleRequestClick}
        />
      ))}

      {showForm && (
        <div className="request-form-modal">
          <form className="request-form" onSubmit={handleSubmit}>
            <h2>Make a {currentService} request</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <div className="form-actions">
              <button type="submit">Submit Request</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="pi-banner">
        <div className="pi-scroll-wrapper">
          <div className="pi-scroll">
            <img src="/pi.jpg" alt="Pi Network" className="pi-logo" />
            <span>We accept Pi Network for payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;

