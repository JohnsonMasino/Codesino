import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const technologies = [
  {
    category: "Website | Web App Development",
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
    ],
  },
  {
    category: "Mobile App Development",
    tools: [
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      { name: "Github", logo: "github.png" },
      { name: "git", logo: "git.png" },
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      { name: "Github", logo: "github.png" },
      { name: "git", logo: "git.png" },
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      { name: "Github", logo: "github.png" },
      { name: "git", logo: "git.png" },
    ],
  },
  {
    category: "Cloud Services",
    tools: [
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
    ],
  },
  {
    category: "Product | Graphics Design",
    tools: [
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
    ],
  },
  {
    category: "Motion Graphics | 3D Animation",
    tools: [
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
    ],
  },
  {
    category: "Software Development Training",
    tools: [
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
      { name: "Zoom", logo: "zoom.png" },
      { name: "Meet", logo: "meet.avif" },
      { name: "WhatsApp", logo: "whatsapp.webp" },
      { name: "Docs", logo: "doc.png" },
    ],
  },
  {
    category: "Crypto | PayPal | Fiat Exchange",
    tools: [
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Bitget", logo: "bitget.png" },
      { name: "Bybit", logo: "bybit.png" },
    ],
  },
  {
    category: "Software Management",
    tools: [
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
      { name: "ClickUp", logo: "clickup.png" },
      { name: "Note", logo: "note.jpg" },
      { name: "Mailgun", logo: "mailgun.png" },
    ],
  },
];

const Testimonial = () => {
  return (
    
    <div className="bg-blue-300 text-white py-2 px-8">
      {technologies.map((tech, index) => (
        <div key={index} className="overflow-hidden">
          <h2 className="text-center text-sm font-bold mt-12 text-gray-600">
            {tech.category}
          </h2>
          <div className="tech-slider mt-6">
            <div className="slider-track">
              {tech.tools.concat(tech.tools).map((tool, idx) => (
                <img
                  key={idx}
                  src={tool.logo}
                  alt={tool.name}
                  className="h-16 object-contain mx-4"
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <style>
        {`
          @keyframes slide {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .tech-slider {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            width: 100%;
          }

          .slider-track {
            display: flex;
            gap: 20px;
            animation: slide 20s linear infinite;
            width: 200%; /* Ensures seamless loop */
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;