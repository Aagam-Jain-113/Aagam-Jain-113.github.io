import React from 'react'
import Figma from '../assets/figma.svg'
import Git from '../assets/git.svg'
import GitHub from '../assets/github.svg'
import GitLab from '../assets/gitlab.svg'
import GoogleCloud from '../assets/googleCloud.svg'

function Skills() {

    return (
        <div id="skills">
            <div className='max-w-screen-lg px-10 lg:px-0 mx-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Skills</p>
                <div className='grid grid-cols-2 gap-6 mt-12'>
                    <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                        <p className='font-semibold text-lg'>Programming Languages</p>
                        <p className='mt-2'>JavaScript, Python, C</p>
                    </div>
                    <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                        <p className='font-semibold text-lg'>Frameworks</p>
                        <p className='mt-2'>Next.js, React.js, Node.js, TailwindCSS, Django, Flask</p>
                    </div>
                </div>
                <div className='border border-gray-400 mt-6 rounded-lg p-6 w-full md:w-2/3 mx-auto'>
                    <p className='font-semibold text-lg'>Tools</p>
                    <div className='flex flex-wrap items-center space-x-2 md:space-x-4'>
                        <div className='mt-2 items-center space-x-1 flex'>
                            <img src={Figma} alt="Logo" className='w-5 h-5' />
                            <p>Figma</p>
                        </div>
                        <div className='mt-2 items-center space-x-1 flex'>
                            <img src={Git} alt="Logo" className='w-5 h-5' />
                            <p>Git</p>
                        </div>
                        <div className='mt-2 items-center space-x-1 flex'>
                            <img src={GitHub} alt="Logo" className='w-5 h-5' />
                            <p>GitHub</p>
                        </div>
                        <div className='mt-2 items-center space-x-1 flex'>
                            <img src={GitLab} alt="Logo" className='w-5 h-5' />
                            <p>GitLab</p>
                        </div>
                        <div className='mt-2 items-center space-x-1 flex'>
                            <img src={GoogleCloud} alt="Logo" className='w-5 h-5' />
                            <p>Google Cloud Platform (GCP)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
