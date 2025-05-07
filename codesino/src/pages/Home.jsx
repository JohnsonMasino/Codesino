import React from 'react'
import "../styles/main.css";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import HeroTextOnly from '../components/HeroSection';
import ImageWithText from '../components/WhyUs';
import AboutInfo from '../components/AboutInfo';



const Home = () => {
  return (
    <>
        
        <ResponsiveAppBar/>
        <HeroTextOnly/>
        <AboutInfo />
        <ImageWithText/>
        <Footer />
    
    
    </>
  )
}

export default Home