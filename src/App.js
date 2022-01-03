import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='bg-gradient-to-b from-green-50 via-green-200 to-green-400'>
      <div className='h-screen flex flex-col justify-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className='h-2 bg-green-700 w-full' />
    </div>
  );
}

export default App;