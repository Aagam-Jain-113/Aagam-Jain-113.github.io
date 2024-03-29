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
        <nav className={'py-6 fixed z-50 w-full top-0 duration-300  ' + (active ? "bg-hero1 backdrop-blur-sm bg-opacity-70" : "bg-transparent")}>
            <div className='max-w-screen-lg flex flex-wrap items-center justify-between px-10 lg:px-0 mx-auto'>
                <a href="#" className='text-3xl text-primary font-bold'>Aagam.</a>
                <div className="md:hidden">
                    <Hamburger color="#303941" toggled={isOpen} toggle={setIsOpen} />
                </div>
                {isOpen ?
                    <div onClick={()=>setIsOpen(!isOpen)} className={'space-y-5 mt-1 py-4 bg-white text-primary text-sm text-center items-center justify-center flex flex-col w-full relative'}>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </div>
                    :
                    <>
                        <div className='hidden md:flex text-primary font-semibold text-lg md:space-x-5 lg:space-x-16'>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#testimonials">Testimonials</a>
                        </div>
                        <a href="#contact" className='hidden md:flex text-lg text-white bg-primary px-6 rounded-2xl py-1'>Contact</a>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
