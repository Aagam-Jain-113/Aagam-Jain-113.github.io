import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
    Scrollbar, FreeMode
} from 'swiper';

SwiperCore.use([FreeMode, Scrollbar]);

function ProjectTemplate(props) {    
    return (
        <Swiper slidesPerView={1.2} spaceBetween={10} FreeMode={true} pagination={{
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
                    <SwiperSlide className={`rounded-lg pt-10 bg-opacity-20 bg-${project.color}-100 border border-${project.color}-200`}>
                        <div className='px-6 h-2/3 sm:h-1/2'>
                            <p className='font-semibold text-2xl'>{project.title}</p>
                            <p className='mt-2'>{project.description}</p>
                            <p className='mt-2'><span className='font-semibold'>Tech Stack:</span> <span className='italic text-sm font-light'>{project.tech}</span> </p>
                            <div className='my-4 flex absolute bottom-[35%] md:bottom-[50%] lg:bottom-[45%]'>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`mr-2 flex w-fit items-center py-2 bg-${project.color}-500 hover:bg-${project.color}-400 text-white font-medium px-4 rounded-md`}>Live <BsBoxArrowUpRight className='ml-2' /></a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`py-2 flex items-center w-fit text-${project.color}-600 hover:bg-${project.color}-300 font-medium bg-${project.color}-200 px-4 rounded-md`}>GitHub <BsGithub className='ml-2' /></a>
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
