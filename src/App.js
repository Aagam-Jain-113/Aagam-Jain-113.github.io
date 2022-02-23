import React from 'react'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center'>
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;