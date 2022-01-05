import React from 'react'
import Logisy from '../assets/logisy.png'
import StartLadder from '../assets/startladder.png'
import Lemon8 from '../assets/lemon8.png'
import Tralearnsys from '../assets/tralearnsys.jpg'

function Experience() {
    return (
        <div className='max-w-screen-lg px-10 pt-12 lg:pt-24 lg:px-0 mx-auto' id="experience">
            <p className='text-2xl md:text-4xl text-primary font-semibold'>Experience</p>
            <div className='grid grid-cols-2 gap-6 mt-12'>
                <div className='sm:col-span-1 border border-green-700 shadow-current shadow-green-600 rounded-lg p-6 col-span-2'>
                    <div className='flex items-center justify-between'>
                        <p className='font-light'>Jan 2022 - present</p>
                        <img src={Logisy} alt="Logo" className='w-1/6' />
                    </div>
                    <p className='font-semibold text-lg'>Logisy</p>
                    <p className='mt-2'>Frontend Developer Intern</p>
                </div>
                <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                    <div className='flex items-center justify-between'>
                        <p className='font-light'>Sept 2021 - Dec 2021</p>
                        <img src={StartLadder} alt="Logo" className='w-1/6' />
                    </div>
                    <p className='font-semibold mt-1 text-lg'>StartLadder</p>
                    <p className='mt-2'>Frontend Developer Intern</p>
                </div>
                <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                    <div className='flex items-center justify-between'>
                        <p className='font-light'>Aug 2021</p>
                        <img src={Lemon8} alt="Logo" className='w-1/6' />
                    </div>
                    <p className='font-semibold mt-1 text-lg'>Lemon8</p>
                    <p className='mt-2'>Freelancer</p>
                </div>
                <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                    <div className='flex items-center justify-between'>
                        <p className='font-light'>May 2021 - Jul 2021</p>
                        <img src={Tralearnsys} alt="Logo" className='w-1/6' />
                    </div>
                    <p className='font-semibold mt-1 text-lg'>Tralearnsys</p>
                    <p className='mt-2'>Frontend Developer Intern</p>
                </div>
            </div>
        </div>
    )
}

export default Experience
