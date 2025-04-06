import React from 'react'
import "../styles/main.css";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import CallToAction from '../components/Call_To_Action';
import HeroTextOnly from '../components/HeroSection';
import ImageWithText from '../components/WhyUs';

const Home = () => {
  return (
    <>

        <ResponsiveAppBar/>
        <HeroTextOnly/>
        <CallToAction />
        <ImageWithText/>
        <Footer />
    
    
    </>
  )
}

export default Home