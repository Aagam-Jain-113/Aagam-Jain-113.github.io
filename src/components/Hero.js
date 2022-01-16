import React from 'react'
import Typewriter from 'typewriter-effect'
import Profile from '../assets/profile-pic.png'

function Hero() {
    return (
        <div className="text-2xl font-inter bg-gradient-to-b text-primary from-hero1 to-white lg:text-4xl my-20 px-10 lg:px-0 w-full">
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col-reverse sm:grid grid-cols-3 pt-20 min-h-screen items-center justify-center'>
                    <div className='col-span-3 sm:col-span-2 mr-0 mt-6 sm:mt-0 sm:mr-12'>
                        <p>Hi, I'm <span className='text-4xl lg:text-5xl mt-4 font-medium'>Aagam Jain</span>🙏</p>
                        <p className='mt-3 sm:mt-6'>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'Designer', 'Freelancer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                        <div className='my-3 sm:my-6'>
                            <p className='text-xl'>A Senior Year student pursuing Bachelor of Technology in Electronics and Communication from <span className='font-semibold'>BIT, Mesra.</span></p>
                            <p className='text-xl mt-2'>A <span className='font-semibold'>Coder</span> who focuses on writing clean, elegant and efficient code.</p>
                            <p className='text-xl mt-2'>A <span className='font-semibold'>Designer</span> with passion for designing beautiful user experience designs.</p>
                        </div>
                        <a href="#experience" className='flex text-lg text-center py-2 text-white w-32 bg-primary px-6 rounded-lg'>My Work</a>
                    </div>
                    <div className='col-span-3 mt-24 sm:mt-0 mx-auto sm:col-span-1'>
                        <img src={Profile} alt="Profile" className='rounded-full w-3/4 sm:w-full mx-auto lg:mx-0 shadow-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
