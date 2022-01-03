import React from 'react'
import Desktop from '../assets/desktop.png'
import Aidzee from '../assets/aidzee.png'
import Invoice from '../assets/invoice.png'
import Speakable from '../assets/speakable.png'
import Whatsup from '../assets/whatsup.png'
import StyleClub from '../assets/styleclub.png'

function Projects() {
    const [project, setProject] = React.useState(Aidzee)
    return (
        <div className='mt-12 lg:mt-24'>
            <p className='text-3xl md:text-5xl text-center font-roboto text-green-600 font-semibold'>Projects</p>
            <div className='max-w-screen-lg px-10 lg:px-0 font-poppins mx-auto'>
                <div className='grid grid-cols-2 mt-10 md:gap-10 items-center'>
                    <div className='md:col-span-1 projects flex flex-row w-full overflow-scroll md:overflow-auto md:flex-col col-span-2'>
                        <div className='bg-green-500 mx-0 md:mx-4 project p-4 mt-1 rounded-xl' onClick={() => setProject(StyleClub)} onMouseEnter={() => setProject(StyleClub)}>
                            <p className='font-semibold font-roboto'>Style Club</p>
                            <p>An e-commerce website with user authentication and dashboard</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic font-light'>Next.js, TailwindCSS, MongoDB</span> </p>
                            <div className='mt-2'>
                                <a href="/" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="/" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project mx-4 p-4 mt-1 rounded-xl' onClick={() => setProject(Invoice)} onMouseEnter={() => setProject(Invoice)}>
                            <p className='font-semibold font-roboto'>Invoice Generator</p>
                            <p>An app where you can generate and store invoices.</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic font-light'>React.js, Firebase</span></p>
                            <div className='mt-2'>
                                <a href="/" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="/" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mx-4 mt-1 rounded-xl' onClick={() => setProject(Whatsup)} onMouseEnter={() => setProject(Whatsup)}>
                            <p className='font-semibold font-roboto'>Whatsup</p>
                            <p>A Whatsapp Clone</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic font-light'>React.js, Firebase</span></p>
                            <div className='mt-2'>
                                <a href="/" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="/" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mx-4 mt-1 rounded-xl' onClick={() => setProject(Speakable)} onMouseEnter={() => setProject(Speakable)}>
                            <p className='font-semibold font-roboto'>Speakable</p>
                            <p>A web app in which a Dumb person can record their sign language hand gestures, name them and it will convert the them to Sound.</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic font-light'>HTML,CSS,JavaScript,Python,TensorFlow</span></p>
                            <div className='mt-2'>
                                <a href="/" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="/" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mt-1 mx-4 rounded-xl' onClick={() => setProject(Aidzee)} onMouseEnter={() => setProject(Aidzee)}>
                            <p className='font-semibold font-roboto'>Aidzee</p>
                            <p>This is a project about how we connect with others</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic font-light'>HTML,CSS,JavaScript,Node.js</span></p>
                            <div className='mt-2'>
                                <a href="/" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="/" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 relative col-span-2'>
                        <img src={Desktop} alt="Desktop" className='mx-auto w-full' />
                        <img src={project} alt="Project Preview" className='absolute project-img transform duration-500 ease-in transition-opacity rounded-sm top-18 w-8/12 h-32 right-12 md:top-24 md:w-90 md:h-52 md:right-16' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
