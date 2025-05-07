import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const technologies = [
  {
    category: "Some Technologies We Use",
    tools: [
      { name: "React", logo: "react.png" },
      { name: "Next.js", logo: "next.png" },
      { name: "Vue.js", logo: "vue.png" },
      { name: "Angular", logo: "angular.png" },
      { name: "Laravel", logo: "laravel.svg" },
      { name: "Django", logo: "django.png" },
      { name: "Github", logo: "github.png" },
      { name: "Svelte", logo: "svelte.png" },
      { name: "tailwind", logo: "tailwind.png" },
      { name: "redux", logo: "redux.png" },
      { name: "axios", logo: "axios.png" },
      { name: "npm", logo: "npm.png" },
      { name: "git", logo: "git.png" },
      { name: "mailgun", logo: "mailgun.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
    ],
  },
];

const TechnologyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="carousel-container">
      {technologies.map((tech, index) => (
        <div className="carousel-section" key={index}>
          <h3 className="category-tech">{tech.category}</h3>
          <Slider {...settings}>
            {tech.tools.map((tool, i) => (
              <div className="tool-slide" key={i}>
                <img
                  src={`/${tool.logo}`}
                  alt={tool.name}
                  className="tool-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCarousel;

