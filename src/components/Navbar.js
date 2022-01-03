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
        <nav className={'py-6 fixed z-50 font-roboto w-full top-0 duration-500  '+(active ? "bg-white" : "bg-transparent")}>
            <div className='max-w-screen-lg flex flex-wrap items-center justify-between px-10 lg:px-0 mx-auto'>
                <p className='text-3xl text-green-600 font-bold'>Aagam.</p>
                <div className="md:hidden">
                    <Hamburger color="rgb(21,128,61)" onToggle={() => setIsOpen(!isOpen)} />
                </div>
                {isOpen ?
                    <div className={'space-y-5 mt-1 py-4 bg-white text-green-600 text-sm text-center items-center justify-center flex flex-col w-full relative'}>
                        <p>About</p>
                        <p>Experience</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                    :
                    <>
                        <div className='hidden md:flex text-green-600 font-medium text-lg space-x-16'>
                            <p>About</p>
                            <p>Experience</p>
                            <p>Projects</p>
                        </div>
                        <p className='hidden md:flex text-lg text-white bg-green-600 px-6 rounded-2xl py-1'>Contact</p>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
