import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={'py-6 fixed z-50 font-roboto w-full top-0 duration-300  ' + (active ? "bg-white" : "bg-transparent")}>
            <div className='max-w-screen-lg flex flex-wrap items-center justify-between px-10 lg:px-0 mx-auto'>
                <a href="#" className='text-3xl text-green-600 font-bold'>Aagam.</a>
                <div className="md:hidden">
                    <Hamburger color="rgb(21,128,61)" toggled={isOpen} toggle={setIsOpen} />
                </div>
                {isOpen ?
                    <div onClick={()=>setIsOpen(!isOpen)} className={'space-y-5 mt-1 py-4 bg-white text-green-600 text-sm text-center items-center justify-center flex flex-col w-full relative'}>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    :
                    <>
                        <div className='hidden md:flex text-green-600 font-medium text-lg space-x-16'>
                            <a href="#about">About</a>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <a href="#contact" className='hidden md:flex text-lg text-white bg-green-600 px-6 rounded-2xl py-1'>Contact</a>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
