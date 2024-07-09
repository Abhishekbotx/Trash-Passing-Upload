import React, { useRef } from 'react';
import HomePage from './HomePage';
import Footer from './Footer';
import Navbar from './Navbar';
import ProblemSolution from './problemSoution';
import Challenges from './Challenges';
import TraditionalWaste from './TraditionalWaste';
import OurVision from './OurVision';

const LandingPage = () => {
  const ourVisionRef = useRef(null);
  const contactUsRef = useRef(null);
  
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-black'>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <ProblemSolution></ProblemSolution>
      <TraditionalWaste></TraditionalWaste>
      <div ref={ourVisionRef}>
        <OurVision></OurVision>
      </div>
      <Footer scrollToSection={scrollToSection} ourVisionRef={ourVisionRef} contactUsRef={contactUsRef}></Footer>
    </div>
  );
};

export default LandingPage;
