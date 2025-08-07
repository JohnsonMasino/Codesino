import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((card, index) => {
          console.log("Post Link:", card.postLink); // ✅ Debugging line

          return (
            <Card
              key={card.id}
              className="flex flex-col h-full max-w-md mx-auto rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardMedia
                component="img"
                className="h-64 object-cover rounded-t-3xl transition-transform duration-500 ease-in-out hover:scale-105"
                image={card.image}
                alt={card.title}
              />
              <CardContent className="flex-grow p-4 text-[#1A0026] text-base font-bold transition-transform duration-500 ease-in-out hover:scale-105">
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link to={card.postLink} className="continue-reading">
                    Continue Reading .......
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCards;
