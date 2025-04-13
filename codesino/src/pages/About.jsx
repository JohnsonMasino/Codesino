import React from 'react';
import AboutInfo from '../components/AboutInfo';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import History from '../components/History';

const About = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <AboutInfo/>
        <History />
        <Footer/>

    </>
  )
}

export default About