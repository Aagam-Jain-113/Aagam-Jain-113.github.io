import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Logo from '../subcomponents/Logo'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import Intro from './Intro'
import { motion } from 'framer-motion'

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
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
font-weight: bolder;
font-size: 1.25rem;
`
const Project = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
transform: rotate(90deg) translate(-50%,-50%);
right: calc(1rem + 2vw);
text-decoration: none;
font-weight: bolder;
font-size: 1.25rem;
`

const Bottombar = styled.div`
color: ${props => props.theme.text};
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
text-decoration: none;
font-weight: bolder;
font-size: 1.25rem;
z-index: 3;
`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
`

const Skills = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
`

const rotate = keyframes`
from{
    transform: rotate(0)
}
to{
    transform: rotate(360deg)
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? "90%" : "50%"};
left: ${props => props.click ? "92%" : "50%"};
transform: translate(-50%,-50%);
border: none;
outline: none;

background-color: transparent;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} 1.5s linear infinite;
}

&>:last-child{
    display: ${props => props.click ? "none" : "inline-block"};
    padding-top: 1rem;
}
`

const Darkdiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? "50%" : "0%"};
height: ${props => props.click ? "100%" : "0%"};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

function Home() {

    const [open, setOpen] = React.useState(false);

    return (
        <HomeContainer>
            <Container>
                <PowerButton />
                <Logo theme={open ? "dark" : "light"} />
                <SocialIcons theme={open ? "dark" : "light"} />
                <Darkdiv click={open} />
                <Center click={open}>
                    <svg onClick={() => setOpen(!open)} aria-hidden="true" width={open ? 100 : 150} height={open ? 100 : 150} focusable="false" data-prefix="fas" data-icon="yin-yang" class="svg-inline--fa fa-yin-yang fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg>
                    <span>Click here</span>
                </Center>

                <Contact target="_blank" href="mailto:aagamjain113@gmail.com">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        WhileTap={{ scale: 0.9 }}
                    >
                        Say Hi....
                    </motion.h2>
                </Contact>

                <Project to="/projects">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        WhileTap={{ scale: 0.9 }}
                    >
                        Projects
                    </motion.h2>
                </Project>

                <Bottombar>
                    <About to="/about" click={open}>
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            WhileTap={{ scale: 0.9 }}
                        >
                            About
                        </motion.h2>
                    </About>

                    <Skills to="/skills">
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            WhileTap={{ scale: 0.9 }}
                        >
                            Skills
                        </motion.h2>
                    </Skills>
                </Bottombar>
            </Container>
            {open ? <Intro click={open} /> : null}
        </HomeContainer>
    )
}

export default Home