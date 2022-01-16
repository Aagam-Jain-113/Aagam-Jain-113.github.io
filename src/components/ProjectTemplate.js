import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import SwiperCore, {
    Scrollbar, FreeMode, Navigation
} from 'swiper';

SwiperCore.use([FreeMode, Navigation, Scrollbar]);

function ProjectTemplate(props) {    
    return (
        <Swiper scrollbar={{
            "hide": true
        }} slidesPerView={1.2} navigation={true} spaceBetween={10} FreeMode={true} pagination={{
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
            {props.data.map((project) => {
                return (
                    <SwiperSlide className={`rounded-lg pt-10 bg-opacity-20 border ` + (project.theme === "purple" ? "bg-purple-100 border-purple-200" : project.theme === "green" ? "bg-green-100 border-green-200" : "bg-blue-100 border-blue-200")}>
                        <div className='px-6 h-2/3 sm:h-1/2'>
                            <p className='font-semibold text-2xl'>{project.title}</p>
                            <p className='mt-2'>{project.description}</p>
                            <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>{project.tech}</span> </p>
                            <div className='my-4 flex absolute bottom-[35%] md:bottom-[50%] lg:bottom-[45%]'>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`mr-2 flex w-fit items-center py-2 text-white font-medium px-4 rounded-md ` + (project.theme === "purple" ? "bg-purple-500 hover:bg-purple-400" : project.theme === "green" ? "bg-green-500 hover:bg-green-400" : "bg-blue-500 hover:bg-blue-400")}>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`py-2 flex items-center w-fit font-medium px-4 rounded-md ` + (project.theme === "purple" ? "bg-purple-200 text-purple-600 hover:bg-purple-300" : project.theme === "green" ? "bg-green-200 text-green-600 hover:bg-green-300" : "bg-blue-200 text-blue-600 hover:bg-blue-300")}>GitHub <BsGithub className='ml-2' /></a>
                            </div>
                        </div>
                        <img src={project.preview} alt="Preview" className='w-full lg:absolute bottom-0' />
                    </SwiperSlide>
                )
            })}
            <SwiperSlide className='rounded-lg bg-green-100 bg-opacity-20 border border-green-200'>
                <p className='px-10 text-2xl h-full text-center text-green-600 flex items-center'>More projects Coming Soon...</p>
            </SwiperSlide>
        </Swiper>
    )
}

export default ProjectTemplate
