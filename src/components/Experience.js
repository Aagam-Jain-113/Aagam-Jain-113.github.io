import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SiFreelancer } from 'react-icons/si'
import { MdWork } from 'react-icons/md'

function Experience() {
    return (
        <div className='min-h-screen mt-24' id="experience">
            <p className='text-3xl md:text-5xl text-center font-roboto text-green-600 font-semibold'>Experience</p>
            <div className='max-w-screen-lg px-10 mt-12 lg:mt-24 lg:px-0 font-poppins mx-auto'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22,163,74)' }}
                        date="Jan 2022 - present"
                        dateClassName="lg:text-green-700 text-white"
                        iconStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        icon={<SiFreelancer />}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend Devleoper Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Logisy</h4>
                        <p>
                            Just started this exciting journey
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22,163,74)' }}
                        date="Sep 2021 - Dec 2021"
                        dateClassName="lg:text-green-700 text-white"
                        iconStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend Devleoper Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">StartLadder</h4>
                        <p>
                            Performed a key role in development of the <a href="https://startladder.co/" target="_blank" rel="noopener noreferrer" className='text-red-700 underline' >StartLadder</a> website
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22,163,74)' }}
                        date="Aug 2021"
                        dateClassName="lg:text-green-700 text-white"
                        iconStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        icon={<SiFreelancer />}
                    >
                        <h3 className="vertical-timeline-element-title">Freelancer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lemon8</h4>
                        <p>
                            Developed the <a href="https://trendpvc.com/" target="_blank" rel="noopener noreferrer" className='text-red-700 underline' >Website</a> for a client which increased their traffic by 75%
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22,163,74)' }}
                        date="May 2021 - July 2021"
                        dateClassName="lg:text-green-700 text-white"
                        iconStyle={{ background: 'rgb(22,163,74)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend Devleoper</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tralearnsys</h4>
                        <p>
                        Devised and revamped the <a href="https://qualtasdigitalsolutions.com/" target="_blank" rel="noopener noreferrer" className='text-red-700 underline'>Website</a> with the latest UI Trends.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience
