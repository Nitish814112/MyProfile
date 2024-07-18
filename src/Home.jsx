import React from 'react';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Achievements from './component/Achievements';
import Contact from './component/Contact';
import Footer from './component/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Project />
      </section>
      
      <section id="achievements">
        <Achievements />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
