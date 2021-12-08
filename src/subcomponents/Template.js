import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import PowerButton from './PowerButton'
import SocialIcons from './SocialIcons'

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

function Template(props) {
    return (
        <>
            <PowerButton />
            <Logo theme={props.open ? "dark" : "light"} />
            <SocialIcons theme={props.open ? "dark" : "light"} />

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
                <About to="/about" click={props.open}>
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
        </>
    )
}

export default Template
