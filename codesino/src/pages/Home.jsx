import React from 'react'
import "../styles/main.css";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import CallToAction from '../components/Call_To_Action';
import HeroTextOnly from '../components/HeroSection';
import ImageWithText from '../components/WhyUs';
import Ourmission from '../components/OurMission';
import Service from '../components/ServiceCarousel';
import BuiltByUs from '../components/Builtbyus';
import Expertise from '../components/Expertise';
import Technologies from '../components/Technologies';


const Home = () => {
  return (
    <>
        
        <ResponsiveAppBar/>
        <HeroTextOnly/>
        <ImageWithText/>
        <Ourmission/>
        <Service />
        <BuiltByUs/>
        <Expertise/>
        <Technologies/>
        <Footer />
    
    
    </>
  )
}

export default Home