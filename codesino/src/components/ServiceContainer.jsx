import React from "react";

const services = [
  {
    title: "Website | Web App Development",
    image: "/webapp.webp",
    description:
      "A stunning website or web application is the digital face of your brand. We craft responsive, fast, and SEO-optimized solutions tailored to your goals. Whether it's a landing page or a complex SaaS platform, we ensure your brand stands out and converts. Our team has successfully delivered robust web platforms trusted by startups and growing businesses alike.",
  },
  {
    title: "Mobile App Development",
    image: "/mobile1.png",
    description:
      "Reach your users on-the-go with native and cross-platform mobile apps. We design sleek, intuitive experiences for both iOS and Android using modern tools. From MVPs to enterprise-grade apps, our mobile solutions ensure performance, scalability, and top-tier user experience.",
  },
  {
    title: "Cloud Services",
    image: "/cloud.webp",
    description:
      "Scale smarter with our cloud expertise. We deploy and manage your applications on secure and scalable infrastructure including AWS, GCP, and Azure. With cost-effective architecture and 24/7 reliability, our cloud services empower your business to grow seamlessly.",
  },
  {
    title: "Product | Graphics Design",
    image: "/product.avif",
    description:
      "First impressions matter. We create stunning product and brand visuals that resonate with your audience. Whether it’s mockups, marketing creatives, or UI/UX, our design solutions communicate your value with style and clarity.",
  },
  {
    title: "Motion Graphics | 3D Animation",
    image: "/3d.gif",
    description:
      "Bring your ideas to life with powerful visual storytelling. Our motion graphics and 3D animation services are perfect for ads, explainers, intros, and immersive experiences that captivate and convert.",
  },
  {
    title: "Software Development Training",
    image: "/training.png",
    description:
      "Learn software development from real developers. Our hands-on training program is tailored for beginners and intermediates looking to upskill and build real-world projects. We guide you through web, mobile, and backend development with practical sessions.",
  },
  {
    title: "Crypto | Paypal | Fiat Exchange",
    image: "/crypto.avif",
    description:
      "We provide secure and reliable exchange services for Crypto, PayPal, and fiat currencies. Whether you’re converting for business, travel, or investment, our trusted system ensures swift transactions and transparent rates.",
  },
];

const ServiceSection = ({ title, image, description }) => (
  <section className="service-section">
    <div className="image-container">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
    </div>
    <div className="service-content">
      <p>{description}</p>
      <button className="request-btn">Make A Request</button>
    </div>
  </section>
);

const ServiceContainer = () => {
  return (
    <div className="services-page">
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}

      <div className="pi-banner">
        <div className="pi-scroll-wrapper">
          <div className="pi-scroll" >
            <img src="/pi.jpg" alt="Pi Network" className="pi-logo" />
            <span>We accept Pi Network for payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
