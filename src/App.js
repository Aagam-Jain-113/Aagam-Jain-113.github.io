import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-gradient-to-b from-green-100 to-green-300'>
      <div className='min-h-screen flex flex-col justify-center'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;