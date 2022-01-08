import React from 'react'
// import Desktop from '../assets/desktop.png'
import Aidzee from '../assets/aidzee.png'
import Invoice from '../assets/invoice.png'
import Speakable from '../assets/speakable.png'
import Whatsup from '../assets/whatsup.png'
import StyleClub from '../assets/styleclub.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
    FreeMode
} from 'swiper';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
SwiperCore.use([FreeMode]);

function Projects() {
    // const [project, setProject] = React.useState(Aidzee)
    return (
        <div className='pt-10 lg:pt-20' id="projects">
            <div className='max-w-screen-lg px-10 lg:px-0 ml-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Projects</p>
                <div className="mt-10 flex">
                    <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide className='rounded-lg pt-10 bg-opacity-20 bg-purple-100 border border-purple-200'>
                            <div className='px-6 h-2/3'>
                                <p className='font-semibold text-2xl'>Style Club</p>
                                <p className='mt-2'>An e-commerce website with user authentication and dashboard</p>
                                <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>Next.js, TailwindCSS, MongoDB</span> </p>
                                <div className='mt-8 flex'>
                                    <a href="http://style-club.vercel.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-purple-200 px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                    <a href="https://github.com/Aagam-Jain-113/style-club" target="_blank" rel="noopener noreferrer" className='py-2 flex items-center w-fit bg-purple-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                </div>
                            </div>
                            <img src={StyleClub} alt="Preview" className='w-full' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg pt-10 bg-blue-100 bg-opacity-20 border border-blue-200'>
                            <div className='px-6 h-2/3'>
                                <p className='font-semibold text-2xl'>Invoice Generator</p>
                                <p className='mt-2'>An app where you can generate and store the invoice locally.</p>
                                <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                                <div className='mt-8 flex'>
                                    <a href="https://aagam-jain-113.github.io/invoice-generator/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-blue-200 px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                    <a href="https://github.com/Aagam-Jain-113/invoice-generator" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-blue-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                </div>
                            </div>
                            <img src={Invoice} alt="Preview" className='w-full ' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg pt-10 bg-green-100 bg-opacity-20 border border-green-200'>
                            <div className='px-6 h-2/3'>
                                <p className='font-semibold text-2xl'>Whatsup</p>
                                <p className='mt-2'>A clone of web version of whatsapp with firebase authentication</p>
                                <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                                <div className='mt-8 flex'>
                                    <a href="https://whatsupchat.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-green-200 px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                    <a href="https://github.com/Aagam-Jain-113/whatsapp-clone" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-green-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                </div>
                            </div>
                            <img src={Whatsup} alt="Preview" className='w-full ' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg pt-10 bg-green-100 bg-opacity-20 border border-blue-200'>
                            <div className='px-6 h-2/3'>
                                <p className='font-semibold text-2xl'>Aidzee</p>
                                <p className='mt-2'>This is a project about how we connect with others</p>
                                <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>HTML,CSS,JavaScript,Node.js</span></p>
                                <div className='mt-8 flex'>
                                    <a href="https://aidzee.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-blue-200 px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                    <a href="https://github.com/Aagam-Jain-113/AidZee" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-blue-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                </div>
                            </div>
                            <img src={Aidzee} alt="Preview" className='w-full ' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg pt-10 bg-green-100 bg-opacity-20 border border-green-200'>
                            <div className='px-6 h-2/3'>
                                <p className='font-semibold text-2xl'>Speakable</p>
                                <p className='mt-2'>A web app for the Dumb who can record their hand gestures and convert to Sound.</p>
                                <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>JavaScript, Python, TensorFlow</span></p>
                                <div className='mt-8 flex'>
                                    <a href="https://speakableai.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-green-200 px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                    <a href="https://github.com/Aagam-Jain-113/Speakable" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-green-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                </div>
                            </div>
                            <img src={Speakable} alt="Preview" className='w-full ' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-lg px-6 pt-10 bg-purple-100 bg-opacity-20 border border-purple-200'>Project 6</SwiperSlide>
                    </Swiper>
                </div>
                {/* <div className='grid grid-cols-2  md:gap-10 items-center'>
                    <div className='md:col-span-1 projects flex flex-row w-full overflow-scroll md:overflow-auto md:flex-col col-span-2'>
                        <div className='bg-green-500 mx-0 md:mx-4 project p-4 mt-1 rounded-xl' onClick={() => setProject(StyleClub)} onMouseEnter={() => setProject(StyleClub)}>
                            <p className='font-semibold text-2xl font-roboto'>Style Club</p>
                            <p>An e-commerce website with user authentication and dashboard</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>Next.js, TailwindCSS, MongoDB</span> </p>
                            <div className='mt-2'>
                                <a href="http://style-club.vercel.app/" target="_blank" rel="noopener noreferrer" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="https://github.com/Aagam-Jain-113/style-club" target="_blank" rel="noopener noreferrer" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project mx-4 p-4 mt-1 rounded-xl' onClick={() => setProject(Invoice)} onMouseEnter={() => setProject(Invoice)}>
                            <p className='font-semibold text-2xl font-roboto'>Invoice Generator</p>
                            <p>An app where you can generate and store invoices.</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                            <div className='mt-2'>
                                <a href="https://aagam-jain-113.github.io/invoice-generator/" target="_blank" rel="noopener noreferrer" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="https://github.com/Aagam-Jain-113/invoice-generator" target="_blank" rel="noopener noreferrer" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mx-4 mt-1 rounded-xl' onClick={() => setProject(Whatsup)} onMouseEnter={() => setProject(Whatsup)}>
                            <p className='font-semibold text-2xl font-roboto'>Whatsup</p>
                            <p>A Whatsapp Clone</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                            <div className='mt-2'>
                                <a href="https://whatsupchat.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="https://github.com/Aagam-Jain-113/whatsapp-clone" target="_blank" rel="noopener noreferrer" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mx-4 mt-1 rounded-xl' onClick={() => setProject(Speakable)} onMouseEnter={() => setProject(Speakable)}>
                            <p className='font-semibold text-2xl font-roboto'>Speakable</p>
                            <p>A web app in which a Dumb person can record their sign language hand gestures, name them and it will convert the them to Sound.</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>HTML,CSS,JavaScript,Python,TensorFlow</span></p>
                            <div className='mt-2'>
                                <a href="https://speakableai.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="https://github.com/Aagam-Jain-113/Speakable" target="_blank" rel="noopener noreferrer" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                        <div className='bg-green-500 project p-4 mt-1 mx-4 rounded-xl' onClick={() => setProject(Aidzee)} onMouseEnter={() => setProject(Aidzee)}>
                            <p className='font-semibold text-2xl font-roboto'>Aidzee</p>
                            <p>This is a project about how we connect with others</p>
                            <p><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>HTML,CSS,JavaScript,Node.js</span></p>
                            <div className='mt-2'>
                                <a href="https://aidzee.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 py-0.5 bg-green-200 px-4 rounded-md'>Live</a>
                                <a href="https://github.com/Aagam-Jain-113/AidZee" target="_blank" rel="noopener noreferrer" className='py-0.5 bg-green-200 px-4 rounded-md'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 relative col-span-2'>
                        <img src={Desktop} alt="Desktop" className='mx-auto w-full' />
                        <img src={project} alt="Project Preview" className='absolute rounded-sm top-21 w-74 h-41 right-15' />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects
