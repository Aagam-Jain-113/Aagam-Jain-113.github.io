import React from 'react'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

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
      <Contact />
    </div>
  );
}

export default App;