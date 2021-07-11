import React from 'react';
import Typewriter from 'typewriter-effect';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterSquare, AiFillPhone } from "react-icons/ai";
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi'
import { PopupButton } from 'react-calendly';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
    const { theme, setTheme } = useTheme('');
    const icon = theme === 'dark' ? <CgSun size={25} /> : <HiMoon size={25} />;
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className="relative">
            <button className="absolute right-0" onClick={changeTheme} aria-label="Theme changer">{icon}</button>
            <Image src="/aagam.png" alt="user avatar" className="mx-auto rounded-full" height="100%" width="100%" quality="100" />
            <h3 className="my-4 text-3xl font-medium tracking-wide">
                <span> Aagam </span>Jain
            </h3>
            <p className="px-2 py-1 my-2 text-xl font-bold rounded-full">
                <Typewriter options={{
                    strings: ["Web Developer", "Designer", "Freelancer"],
                    autoStart: true,
                    loop: true,
                    className: "inline-block",
                }} />
            </p>
            <div>
                <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
                    <a href="https://github.com/Aagam-Jain-113/" aria-label="GitHub" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                        <AiFillGithub className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/aagam-jain113/" aria-label="Linkedin" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                        <AiFillLinkedin className="w-8 h-8" />
                    </a>
                    <a href="https://twitter.com/AagamJain113" aria-label="Twitter" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                        <AiFillTwitterSquare className="w-8 h-8" />
                    </a>
                </div>
                <div className="flex flex-col py-2 my-4 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                    <div className="flex items-center justify-center my-2">
                        <AiFillMail className="mr-2" />
                        <a href="mailto:aagamjain113@gmail.com">aagamjain113@gmail.com</a>
                    </div>
                    <div className="flex items-center justify-center my-2">
                        <AiFillPhone className="mr-2" />
                        <a href="tel:+91 9490104656">+91 9490104656</a>
                    </div>
                </div>
            </div>
            <PopupButton
                url="https://calendly.com/aagamjain113?primary_color=36e7f7"
                className="w-11/12 px-2 py-2 text-white rounded-full bg-blue-light hover:bg-blue-darker"
                text="Chat Time!"
            />
            <a href="/Resume.pdf" download><button className="w-11/12 px-2 py-2 my-4 text-white rounded-full bg-blue-light hover:bg-blue-darker">Resume</button></a>
        </div>
    )
}

export default Sidebar;
