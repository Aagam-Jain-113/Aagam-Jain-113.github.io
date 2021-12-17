import React from 'react'
import styled from 'styled-components'
import Template from '../subcomponents/Template'
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiC, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFirebase, SiGit, SiVisualstudiocode } from "react-icons/si";
import Growth from '../assets/Images/growth.png';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
background: ${props => props.theme.body};
min-height: 100vh;
width: 100vw;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

h2,h3,h4,h5{
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const CloudImg = styled.img`
width: 850px;
position: absolute;
top: 0;
left: 10%;
height: 100vh;
`

const Cloud = styled.div`
width: 35vw;
height: 50vh;
background: #ECEFF1;
box-shadow: 10px 10px rgba(0,0,0,0.2);
border-radius: 100px;
margin: 0 2rem;
padding: 2rem;
`
const Flex = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const MainFlex = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 600px){
    display: block;
}
`

const Skillpic = styled(motion.img)`
@media (max-width: 600px){
    width: 80%;
    z-index: 99;
    position: relative;
    margin-top: 20px;
}
`

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
function Skills() {
    return (
        <HomeContainer>
            <Container>
                <Template />
                <MainFlex className='space-x-10 lg:space-x-20'>
                    <div>
                        <Flex className='text-5xl space-x-4'>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiReact />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 0.25 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiNextdotjs />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}

                            >
                                <SiJavascript />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 0.75 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiTailwindcss />
                            </motion.div>
                        </Flex>
                        <Flex className='text-5xl my-10 space-x-4'>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 1 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiHtml5 />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 1.25 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiCss3 />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiPython />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 1.75 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiC />
                            </motion.div>
                        </Flex>
                        <Flex className='text-5xl space-x-4'>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 2 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiNodedotjs />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 2.25 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiFirebase />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 2.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiGit />
                            </motion.div>
                            <motion.div
                                transition={{ type: "spring", stiffness: 200, delay: 2.75 }}
                                initial={{ opacity: 0 }}
                                animate={{ y: 30, opacity: 1 }}
                            >
                                <SiVisualstudiocode />
                            </motion.div>
                        </Flex>
                    </div>
                    <Skillpic transition={{ type: "spring" }} initial={{ opacity: 0 }} animate={{ y: 30, opacity: 1 }} src={Growth} alt="Growth" />
                </MainFlex>
                <Center>Skills</Center>
            </Container>
        </HomeContainer>
    )
}

export default Skills
