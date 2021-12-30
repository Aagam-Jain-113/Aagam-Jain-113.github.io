import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='py-6 fixed font-roboto w-full top-0'>
            <div className='max-w-screen-lg flex flex-wrap items-center justify-between px-10 lg:px-0 mx-auto'>
                <p className='text-3xl text-green-700 font-bold'>Aagam.</p>
                <div className="md:hidden">
                    <Hamburger color="rgb(21,128,61)" onToggle={() => setIsOpen(!isOpen)} />
                </div>
                {isOpen ?
                    <div className={'space-y-5 mt-1 py-4 bg-white text-green-700 text-sm text-center items-center justify-center flex flex-col w-full relative'}>
                        <p>About</p>
                        <p>Experience</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                    :
                    <>
                        <div className='hidden md:flex text-green-900 font-medium text-lg space-x-16'>
                            <p>About</p>
                            <p>Experience</p>
                            <p>Projects</p>
                        </div>
                        <p className='hidden md:flex text-lg text-white bg-green-700 px-6 rounded-2xl py-1'>Contact</p>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
