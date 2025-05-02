import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Thank you Codesino ! You deliver web apps swiftly",
    name: "Chineco",
    designation: "Client",
  },
  {
    quote: "Wasn't sure how to trade my crypto but Codesino cleared my doubts",
    name: "Johnbosco",
    designation: "Client",
  },
  {
    quote: "Omo your designing bam o. Na you go dey work for me from now onwards",
    name: "Panda",
    designation: "Client",
  },
  {
    quote: "Daalu my bro. Your website skills mad I swear",
    name: "Nwanafio Lotanna",
    designation: "Tad Tech Founder",
  },
];

const logos = [
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
  "lootcrate.png",
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const truckImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          truckImageRef.current.classList.add("animate-slide-in-left");
        } else {
          truckImageRef.current.classList.remove("animate-slide-in-left");
        }
      },
      { threshold: 0.5 }
    );

    if (truckImageRef.current) {
      observer.observe(truckImageRef.current);
    }

    return () => {
      if (truckImageRef.current) {
        observer.unobserve(truckImageRef.current);
      }
    };
  }, []);

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2>Our works speak for us</h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>

      <div className="company-section">
        <h2>Some Companies we Built Their Webapps</h2>
      </div>

      <div className="logo-marquee">
        <div className="logo-track" ref={truckImageRef}>
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
