import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"
import SwiperCore, {
    FreeMode, Navigation
} from 'swiper';
import invertedComma from '../assets/invertedcomma.svg';
import abhimanyu from '../assets/testimonials/abhimanyu.jpg';
import sanket from '../assets/testimonials/sanket.jpg';


SwiperCore.use([FreeMode,Navigation]);

function Testimonials() {
    return (
        <div className='pt-10 lg:pt-20' id="projects">
            <div className='px-10 lg:px-0 max-w-screen-lg mx-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Testimonials</p>
                <Swiper slidesPerView={1} breakpoints={{
                    "1024": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    }
                }} navigation={true} spaceBetween={20} FreeMode={true} className="mySwiper mt-10">
                    <SwiperSlide>
                        <div className='px-6 py-10 bg-orange-50 rounded-2xl'>
                            <img src={invertedComma} alt="Inverted Commas" />
                            <p className='mt-2 text-justify text-lg'>Aagam was a fantastic frontend developer when he worked with us at lemon8.in. He was very quick in implementing the UI in React and always accurately converted the UI design into responsive code without many intimations. Aagam was also able to smartly use third-party libraries and implement the dynamic creative aspects of the design. He always delivered on time, was punctual for our meetings and never wasted anyone's time. It was a pleasure to work with him, hopefully will work with him on more projects in the future 😊</p>
                            <div className='flex mt-4 space-x-4'>
                                <img src={abhimanyu} alt="Profile" className='w-12 h-12 rounded-full' />
                                <div>
                                    <p className='font-semibold text-xl'>Abhimanyu Jha</p>
                                    <p className='text-sm italic'>Co-Founder at Lemon8</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='px-6 py-10 bg-orange-50 rounded-2xl'>
                            <img src={invertedComma} alt="Inverted Commas" />
                            <p className='mt-2 text-justify text-lg'>Aagam ability to deliver the task efficiently was something that impressed me the most. He worked with us to develop front end of our website, and he delivered what he promised. He is truly accountable and ownership driven individual with potential to do wonders.</p>
                            <div className='flex mt-4 space-x-4'>
                                <img src={sanket} alt="Profile" className='w-12 h-12 rounded-full' />
                                <div>
                                    <p className='font-semibold text-xl'>Sanket Jha</p>
                                    <p className='text-sm italic'>Co-Founder at RUBEX</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials