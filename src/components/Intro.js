import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Box = styled(motion.div)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

height:55vh;
width: 60vw;
display: flex;
background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) bottom,
            linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index: 1;
@media (max-width: 600px){
    border-right-width: initial;
    flex-direction: column;
    height:100vh;
    width: 65vw;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    background: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 100% 0px / 2px 100% no-repeat, linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 0px 0px;
    border-style: solid none;
    border-image: initial;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
@media (max-width: 600px){
    width: 100%;
}
`

const Text = styled.div`
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    }
    @media (max-width: 600px){
        color: ${props => props.theme.text};
        &>*:last-child{
            color: ${props => `rgba(${props.theme.textRgba},0.6)`};
        }
    }
`

const Pic = styled(motion.div)`
height: 80%;
disply: flex;
width: 100%;
`

function Intro() {

    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    })
    return (
        <Box initial={{ height: 0 }}
            animate={{ height: '65vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1 className='text-2xl lg:text-4xl'>Hello,</h1>
                    <h2 className='text-2xl mt-2 lg:mt-0 lg:text-4xl'>I'm  <span className='text-3xl lg:text-5xl'>Aagam Jain</span></h2>
                    <h6 className='text-3xl mt-2 lg:mt-0 lg:text-5xl'>
                        <Typewriter options={{
                            strings: ["Web Developer", "Designer", "Freelancer"],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1500,
                        }} /></h6>
                </Text>
            </SubBox>
            <SubBox>
                <Pic initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}>
                    <lottie-player
                        id="firstLottie"
                        autoplay
                        loop
                        mode="normal"                        
                        src="https://assets6.lottiefiles.com/packages/lf20_1LhsaB.json"
                    />
                </Pic>
            </SubBox>
        </Box>
    )
}

export default Intro
