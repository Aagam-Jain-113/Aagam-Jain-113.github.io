import React from 'react'
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='bg-gradient-to-b from-green-100 to-green-300'>
      <div className='h-screen flex flex-col justify-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default App;