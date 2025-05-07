import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import History from '../components/History';
import Team from '../components/Team';
import Service from '../components/ServiceCarousel';
import BuiltByUs from '../components/Builtbyus';
import Expertise from '../components/Expertise';
import Technologies from '../components/Technologies';
import OurMission from '../components/OurMission';

const About = () => {
  return (
    <>
        <ResponsiveAppBar/>

        <History />
        <Team/>
        <OurMission />
        <Service />
        <BuiltByUs />
        <Expertise />
        <Technologies />

        <Footer/>

    </>
  )
}

export default About