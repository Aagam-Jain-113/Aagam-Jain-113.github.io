import React from 'react'
// import Desktop from '../assets/desktop.png'
import Aidzee from '../assets/aidzee.png'
import Invoice from '../assets/invoice.png'
import Speakable from '../assets/speakable.png'
import Whatsup from '../assets/whatsup.png'
import StyleClub from '../assets/styleclub.png'
import Rubex from '../assets/rubex.png'
import Trend from '../assets/trendpvc.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
    FreeMode, Scrollbar
} from 'swiper';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
SwiperCore.use([FreeMode, Scrollbar]);

function Projects() {
    const [index, setIndex] = React.useState(1);
    const tabItems = [
        {
            id: 1,
            title: "Personal",
        },
        {
            id: 2,
            title: "Freelance",
        }
    ]
    const TabItemComponent = ({
        title = '',
        onItemClicked = () => console.error('You passed no action to the component'),
        isActive = false,
    }) => {
        return (
            <div className={isActive ? 'py-2 px-6 bg-primary rounded-full text-white' : 'py-2 px-6 text-primary hover:text-black'} onClick={onItemClicked}>
                <p>{title}</p>
            </div>
        )
    };
    return (
        <div className='pt-10 lg:pt-20' id="projects">
            <div className='px-10 lg:px-0 max-w-screen-lg mx-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Projects</p>
                <div className='flex cursor-pointer mt-10 font-medium bg-gray-200 w-fit rounded-full'>
                    {tabItems.map(({ id, title }) =>
                        <TabItemComponent
                            key={title}
                            title={title}
                            onItemClicked={() => setIndex(id)}
                            isActive={index === id}
                        />
                    )}
                </div>
                <div className="mt-10 h-420 flex relative">
                    {index === 1 &&
                        <Swiper slidesPerView={1.2} autoHeight={false} height={1000} spaceBetween={10} freeMode={true} pagination={{
                            "clickable": true
                        }} scrollbar={{
                            "hide": true
                        }} breakpoints={{
                            "768": {
                                "slidesPerView": 1.75,
                                "spaceBetween": 20
                            },
                            "1024": {
                                "slidesPerView": 2.75,
                                "spaceBetween": 20
                            }
                        }} className="mySwiper">
                            <SwiperSlide className='rounded-lg pt-10 bg-opacity-20 bg-purple-100 border border-purple-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Style Club</p>
                                    <p className='mt-2'>An e-commerce website with user authentication and dashboard</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>Next.js, TailwindCSS, MongoDB</span> </p>
                                    <div className='mt-8 flex absolute bottom-[50%] lg:bottom-[45%]'>
                                        <a href="http://style-club.vercel.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-purple-500 hover:bg-purple-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/style-club" target="_blank" rel="noopener noreferrer" className='py-2 flex items-center w-fit text-purple-600 hover:bg-purple-300 font-medium bg-purple-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                
                                <img src={StyleClub} alt="Preview" className='w-full lg:absolute bottom-0' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg pt-10 bg-blue-100 bg-opacity-20 border border-blue-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Invoice Generator</p>
                                    <p className='mt-2'>An app where you can generate and store the invoice locally.</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                                    <div className='mt-8 flex absolute bottom-[50%] lg:bottom-[45%]'>
                                        <a href="https://aagam-jain-113.github.io/invoice-generator/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/invoice-generator" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center text-blue-600 hover:bg-blue-300 font-medium bg-blue-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                
                                <img src={Invoice} alt="Preview" className='w-full lg:absolute bottom-0' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg h-[600px] pt-10 bg-green-100 bg-opacity-20 border border-green-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Whatsup</p>
                                    <p className='mt-2'>A clone of web version of whatsapp with firebase authentication</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, Firebase</span></p>
                                    <div className='mt-8 flex absolute bottom-[50%] lg:bottom-[45%]'>
                                        <a href="https://whatsupchat.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-green-500 hover:bg-green-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/whatsapp-clone" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-green-200 text-green-600 hover:bg-green-300 font-medium px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                
                                <img src={Whatsup} alt="Preview" className='w-full lg:absolute bottom-0' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg pt-10 bg-green-100 bg-opacity-20 border border-blue-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Aidzee</p>
                                    <p className='mt-2'>This is a project about how we connect with others</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>HTML,CSS,JavaScript,Node.js</span></p>
                                    <div className='mt-8 flex absolute bottom-[50%] lg:bottom-[45%]'>
                                        <a href="https://aidzee.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/AidZee" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center text-blue-600 hover:bg-blue-300 font-medium bg-blue-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                
                                <img src={Aidzee} alt="Preview" className='w-full lg:absolute bottom-0' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg relative pt-10 bg-green-100 bg-opacity-20 border border-green-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Speakable</p>
                                    <p className='mt-2'>A web app for Dumb to record their hand gestures and convert to Sound.</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>JavaScript, Python, TensorFlow</span></p>
                                    <div className='mt-8 flex absolute bottom-[50%] lg:bottom-[45%]'>
                                        <a href="https://speakableai.netlify.app/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-green-500 hover:bg-blue-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/Speakable" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center bg-green-200 text-green-600 hover:bg-green-300 font-medium px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                
                                <img src={Speakable} alt="Preview" className='w-full lg:absolute bottom-0' />
                            </SwiperSlide>
                            {/* <SwiperSlide className='rounded-lg px-6 pt-10 bg-purple-100 bg-opacity-20 border border-purple-200'>Project 6</SwiperSlide> */}
                        </Swiper>
                    }
                    {index === 2 &&
                        <Swiper slidesPerView={1.2} spaceBetween={10} freeMode={true} pagination={{
                            "clickable": true
                        }} breakpoints={{
                            "768": {
                                "slidesPerView": 1.75,
                                "spaceBetween": 20
                            },
                            "1024": {
                                "slidesPerView": 2.75,
                                "spaceBetween": 20
                            }
                        }} className="mySwiper">
                            <SwiperSlide className='rounded-lg pt-10 bg-opacity-20 bg-purple-100 border border-purple-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Rubex</p>
                                    <p className='mt-2'>Figma converted into React code.</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, TailwindCSS</span> </p>
                                    <div className='mt-8 flex absolute bottom-[45%]'>
                                        <a href="https://rubexfreelance.netlify.app" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-purple-500 hover:bg-purple-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/Aagam-Jain-113/rubex" target="_blank" rel="noopener noreferrer" className='py-2 flex items-center w-fit text-purple-600 hover:bg-purple-300 font-medium bg-purple-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                <img src={Rubex} alt="Preview" className='w-full mt-6 h-1/2' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg pt-10 bg-blue-100 bg-opacity-20 border border-blue-200'>
                                <div className='px-6 h-1/2'>
                                    <p className='font-semibold text-2xl'>Trend PVC</p>
                                    <p className='mt-2'>A website created for a local businessman under Lemon8.</p>
                                    <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>React.js, TailwindCSS</span></p>
                                    <div className='mt-8 flex absolute bottom-[45%]'>
                                        <a href="https://trendpvc.com/" target="_blank" rel="noopener noreferrer" className='mr-2 flex w-fit items-center py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium px-4 rounded-md'>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                        <a href="https://github.com/lemon-8/trend-laminates/tree/react" target="_blank" rel="noopener noreferrer" className='py-2 flex w-fit items-center text-blue-600 hover:bg-blue-300 font-medium bg-blue-200 px-4 rounded-md'>GitHub <BsGithub className='ml-2' /></a>
                                    </div>
                                </div>
                                <img src={Trend} alt="Preview" className='w-full mt-6 h-1/2' />
                            </SwiperSlide>
                            <SwiperSlide className='rounded-lg bg-green-100 bg-opacity-20 border border-green-200'>
                                <p className='px-10 text-2xl h-full text-center text-green-600 flex items-center'>More projects Coming Soon...</p>
                            </SwiperSlide>
                        </Swiper>
                    }
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
