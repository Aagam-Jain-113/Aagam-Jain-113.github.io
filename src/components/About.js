import React from 'react'
import Profile from '../assets/profile-pic.png'
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiFirebase, SiGit, SiVisualstudiocode } from 'react-icons/si'

function About() {

    const skills = [
        {
            name: "Next.js",
            logo: <SiNextdotjs className='text-xl' />,
        },
        {
            name: "React.js",
            logo: <SiReact className='text-xl' />,
        },
        {
            name: "TailwindCSS",
            logo: <SiTailwindcss className='text-xl' />,
        },
        {
            name: "Javascript",
            logo: <SiJavascript className='text-xl' />,
        },
        {
            name: "Node.js",
            logo: <SiNodedotjs className='text-xl' />,
        },
        {
            name: "MongoDB",
            logo: <SiMongodb className='text-xl' />,
        },
        {
            name: "Firebase",
            logo: <SiFirebase className='text-xl' />,
        },
        {
            name: "Git",
            logo: <SiGit className='text-xl' />,
        },
        {
            name: "Visual Studio Code",
            logo: <SiVisualstudiocode className='text-xl' />,
        },
    ]
    return (
        <div id="about">
            <p className='text-3xl md:text-5xl text-center font-roboto text-green-600 font-semibold'>About</p>
            <div className='max-w-screen-lg px-10 lg:px-0 font-poppins mx-auto'>
                <div className='grid grid-cols-2 mt-12 lg:mt-24 items-center'>
                    <div className='sm:col-span-1 col-span-2'>
                        <img src={Profile} alt="Profile" className='rounded-full w-3/4 mx-auto lg:mx-0 shadow-2xl' />
                    </div>
                    <div className='sm:col-span-1 mt-6 sm:mt-0 text-lg col-span-2'>
                        <p>A Senior Year student pursuing Bachelor of Technology in Electronics and Communication from <span className='font-semibold'>BIT, Mesra.</span></p><br />
                        <p>A <span className='font-semibold'>Coder</span> who focuses on writing clean, elegant and efficient code.</p><br />
                        <p>You can <span className='font-semibold'>Trust</span> me with the following <span className='font-semibold'>Skills:</span></p>
                        <div className='flex flex-wrap text-base'>
                            {skills.map((skill,index) => {
                                return (
                                    <div key={index} className='flex mt-4 mr-2 space-x-2 px-4 p-2 rounded-3xl items-center bg-green-500'>
                                        {skill.logo}
                                        <p className='font-medium'>{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
