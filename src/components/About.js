import React from 'react'
import styled from 'styled-components'
import Template from '../subcomponents/Template'
import Profileimg from '../assets/Images/profile-pic.png'
import { motion } from 'framer-motion'
import resume from '../assets/resume/Aagam_Jain_Resume.pdf'

const HomeContainer = styled.div`
background: ${props => props.theme.body};
height: 100vh;
width: 100vw;
position: relative;
overflow: hidden;

h2,h3,h4,h5{
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
display: flex;
`

const Box = styled(motion.div)`
position: relative;
height: 75vh;
margin: 5%;
width: 50vw;
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 10px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
z-index: 1;
`

const Speech = styled(motion.div)`
    position: relative;
    background: #000;
    display: inline-block;
    width: 240px;
    height: 90px;
    color: #fff;
    margin: 30px;
    padding: 15px 15px;
    border-radius: 10px;

    &:after{
        content: "";
        position: absolute;
        bottom: 0px;
        left: -32px;
        width: 70px;
        height: 30px;
        background-color: #000;
        transform: skew(55deg);
        transform-origin: top right;
        border-radius: 15% 0 0 0 / 25%;
        z-index: -1;
    }
`

const data = [
    {
        id: 1,
        content: "A Senior Year student pursuing Bachelor of Technology in ECE from BIT, Mesra."
    },
    {
        id: 2,
        content: "A Designer with passion for designing beautiful user experience designs."
    },
    {
        id: 3,
        content: "A Coder who focuses on writing clean, elegant and efficient code."
    },
    {
        id: 4,
        content: "My Passion - To help people by making thier lives easy with Tech."
    },
]

const contentbox = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.4
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Center = styled.p`
position: absolute;
text-transform: uppercase;
color: #999;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
font-size: 80px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: none;
outline: none;

background-color: transparent;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
`

function AboutPage() {
    const download = () => {
        window.open(resume);
    }
    return (
        <div>
            <HomeContainer>
                <Container>
                    <Template />
                    <Box
                        variants={contentbox}
                        initial="hidden"
                        animate="visible">
                        {data.map((data) => {
                            return (
                                <Speech key={data.id} variants={item}>
                                    {data.content}
                                </Speech>
                            )
                        })}
                        <div className="w-full mx-auto col-span-2 flex justify-center">
                            <motion.button onClick={() => download()} initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }} className="h-12 w-32 rounded-xl bg-black text-xl text-white">Resume</motion.button>
                        </div>
                    </Box>
                    <Center>ReadME</Center>

                    <motion.img initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }} src={Profileimg} alt=" " className="mt-28 block h-80 rounded-full w-80 transform duration-500 hover:scale-110" />
                </Container>
            </HomeContainer>
        </div>
    )
}

export default AboutPage
