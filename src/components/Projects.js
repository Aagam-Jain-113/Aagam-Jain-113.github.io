import React from 'react'
import styled from 'styled-components'
import Template from '../subcomponents/Template'
import { motion } from 'framer-motion'

import VerticalCarousel from '../subcomponents/VerticalCarousel'

import Swasth from '../assets/Images/swasth.png'
import Styleclub from '../assets/Images/styleclub.png'
import Aidzee from '../assets/Images/aidzee.png'
import Whatsup from '../assets/Images/whatsup.png'
import Bustnews from '../assets/Images/bustnews.png'
import Invoice from '../assets/Images/invoice.png'
import Wikimoji from '../assets/Images/wikimoji.png'
import Speakable from '../assets/Images/speakable.png'


const Work = [
    {
        id: 1,
        name: "Style Club",
        description: "An e-commerce website with user authentication and an admin dashboard to track orders and payments",
        tags: ["Next.js", "TailwindCSS", "MongoDB"],
        demo: "http://style-club.vercel.app/",
        github: "https://github.com/Aagam-Jain-113/style-club",
        background: Styleclub,
    },
    {
        id: 2,
        name: "Trend Laminates",
        description: "Designed and developed a website for a client using React.js and TailwindCSS and increased their online presence during pandemic which increased their traffic by 75%",
        tags: ["React.js", "TailwindCSS"],
        demo: "https://trendpvc.com/",
        github: "https://github.com/lemon-8/trend-laminates/tree/react",
        background: Swasth,
    },
    {
        id: 3,
        name: "Invoice Generator",
        description: "A web application in which user can seamlessly create invoices and store them locally",
        tags: ["React", "Firebase"],
        demo: "https://aagam-jain-113.github.io/invoice-generator/",
        github: "https://github.com/Aagam-Jain-113/invoice-generator",
        background: Invoice,
    },
    {
        id: 4,
        name: "Speakable AI",
        description: "A web application where a person with speech disability can record their hand gestures which converts them to speech",
        tags: ["JavaScript", "TensorFlow.js"],
        demo: "https://speakableai.netlify.app/",
        github: "https://github.com/Aagam-Jain-113/Speakable",
        background: Speakable,
    },
    {
        id: 5,
        name: "Whatsup Chat",
        description: "A clone of whatsapp",
        tags: ["React.js", "Firebase"],
        demo: "https://whatsupchat.netlify.app/",
        github: "https://github.com/Aagam-Jain-113/whatsapp-clone",
        background: Whatsup,
    },
    {
        id: 6,
        name: "Aidzee",
        description: "A virtual portal where anyone can post (just like FB Groups), changes according to your location (just like Tinder & Uber) and connect with others using AidZee Cord(just like Discord)",
        tags: ["JavaScript", "Node.js", "Express"],
        demo: "https://aidzee.netlify.app",
        github: "https://github.com/Aagam-Jain-113/AidZee",
        background: Aidzee,
    },
    {
        id: 7,
        name: "Bust News",
        description: "A web-app where you can find what is real and what is fake. Just visit the website and search for the news you have seen or heard and you will get instant Truth because you deserve nothing but the Truth.",
        tags: ["JavaScript", "Python", "Flask", "TensorFlow.js"],
        demo: "http://bustnews.herokuapp.com/",
        github: "https://github.com/Aagam-Jain-113/Fake-News-Detection",
        background: Bustnews,
    },
    {
        id: 8,
        name: "Wiki Moji",
        description: "Find meaning of your emojis here",
        tags: ["React.js"],
        demo: "https://wiki-moji.netlify.app/",
        github: "https://github.com/Aagam-Jain-113/wiki_moji",
        background: Wikimoji,
    },
    {
        id: 9,
        name: "Swasth AIO",
        description: "A user-friendly portal which is 100% transparent and all your medical issues solved in a 'Single Trusted' website",
        tags: ["JavaScript"],
        demo: "https://swasthaio.netlify.app/",
        github: "https://github.com/Aagam-Jain-113/SwasthAIO",
        background: Swasth,
    },
]

const Bottom = styled.p`
position: fixed;
text-transform: uppercase;
color: #999;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
bottom: 5%;
left: 50%;
transform: translate(-50%,0%);
border: none;
outline: none;

background-color: transparent;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
`

const HomeContainer = styled.div`
background-color: ${props => props.theme.body};
height: 650vh;
position: relative;
display: flex;
align-items: center;

h2,h3,h4,h5{
    font-weight: 500;
}
`

const Container = styled(motion.ul)`
padding: 2rem;
position: fixed;
top: 7rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;
@media (max-width: 600px){
    left: 0;
}
`

function Projects() {

    const container = {

        hidden: { opacity: 0 },
        show: {
            opacity: 1,

            transition: {
                staggerChildren: 0.5,
                duration: 0.5,
            }
        }

    }

    const ref = React.useRef(null);

    React.useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
        }

        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate);

        }
    }, [])

    return (
        <div>
            <HomeContainer>
                <Template />
                <Container ref={ref} variants={container} initial='hidden' animate='show'>
                    {Work.map((item) =>
                        <VerticalCarousel key={item.id} data={item} />
                    )}
                </Container>
                <Bottom>Projects</Bottom>
            </HomeContainer>
        </div>
    )
}

export default Projects
