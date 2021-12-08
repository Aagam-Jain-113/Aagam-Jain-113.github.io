import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    }
`

function Intro() {

    React.useEffect(()=>{
        import ("@lottiefiles/lottie-player");
    })
    return (
        <Box initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hello,</h1>
                    <h2>I'm Aagam Jain</h2>
                    <h6>A web developer who makes the design go live</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}>
                    <lottie-player
                        id="firstLottie"
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets6.lottiefiles.com/packages/lf20_1LhsaB.json"
                        className="block mx-auto w-full"
                    />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
