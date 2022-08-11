import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Brands from './Brands';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import BackToTopBtn from './BackToTopBtn';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Home;
