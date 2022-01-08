import React from 'react'
import Figma from '../assets/figma.svg'
import Git from '../assets/git.svg'
import GitHub from '../assets/github.svg'
import GitLab from '../assets/gitlab.svg'
import GoogleCloud from '../assets/googleCloud.svg'
import JavaScript from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import C from '../assets/c.svg'
import Nextjs from '../assets/nextjs.svg'
import Reactjs from '../assets/react.svg'
import Nodejs from '../assets/nodejs.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Django from '../assets/django.svg'
import Flask from '../assets/flask.svg'
import VSCode from '../assets/vscode.svg'

function Skills() {

    return (
        <div id="skills">
            <div className='max-w-screen-lg px-10 pt-10 lg:pt-20 lg:px-0 mx-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Skills</p>
                <div className='grid grid-cols-2 gap-6 mt-12'>
                    <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                        <p className='font-semibold text-lg'>Programming Languages</p>
                        <div className='flex flex-wrap items-center space-x-2 md:space-x-4'>
                            <div className='mt-2 items-center space-x-1 flex'>
                                <img src={JavaScript} alt="Logo" className='w-5 h-5' />
                                <p>JavaScript</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex'>
                                <img src={Python} alt="Logo" className='w-5 h-5' />
                                <p>Python</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex'>
                                <img src={C} alt="Logo" className='w-5 h-5' />
                                <p>C</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-1 border border-gray-400 rounded-lg p-6 col-span-2'>
                        <p className='font-semibold text-lg'>Frameworks</p>
                        <div className='flex flex-wrap items-center'>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Nextjs} alt="Logo" className='w-5 h-5' />
                                <p>Next.js</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Reactjs} alt="Logo" className='w-5 h-5' />
                                <p>React.js</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Nodejs} alt="Logo" className='w-5 h-5' />
                                <p>Node.js</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Tailwind} alt="Logo" className='w-5 h-5' />
                                <p>TailwindCSS</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Django} alt="Logo" className='w-5 h-5' />
                                <p>Django</p>
                            </div>
                            <div className='mt-2 items-center space-x-1 flex mr-4'>
                                <img src={Flask} alt="Logo" className='w-5 h-5' />
                                <p>Flask</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 mt-6 rounded-lg p-6 w-full md:w-10/12 mx-auto'>
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
                            <img src={VSCode} alt="Logo" className='w-5 h-5' />
                            <p>Visual Studio Code</p>
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
