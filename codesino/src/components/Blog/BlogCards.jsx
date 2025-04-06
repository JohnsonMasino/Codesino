import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = Array.from({ length: 9 }).map((_, index) => ({
  id: index,
  title: `Code Like A Pro #${index + 1}`,
  description: 'Perfect for modern tropical spaces, baroque-inspired interiors, or cozy corners.',
  image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
  postLink: `/post/${index + 1}`, // Example link to a post
}));

const BlogCards = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
      offset: 100, // Trigger animation 100px before element enters viewport
      easing: 'ease-in-out', // Smooth easing for transitions
    });
  }, []);

  return (
    <div className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className="flex flex-col h-full max-w-md mx-auto rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 150} // Increased stagger delay for effect
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
              <Typography variant="body2" color="text.secondary" className="animate-ellipsis">
                <a href={card.postLink} className="continue-reading">
                  Continue Reading .......
                </a>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
