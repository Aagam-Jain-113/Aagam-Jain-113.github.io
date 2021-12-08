import React from 'react'
import styled, { keyframes } from 'styled-components'
import Intro from './Intro'
import Template from '../subcomponents/Template'

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
                <Template open={open} />
                <Darkdiv click={open} />
                <Center click={open}>
                    <svg onClick={() => setOpen(!open)} aria-hidden="true" width={open ? 100 : 150} height={open ? 100 : 150} focusable="false" data-prefix="fas" data-icon="yin-yang" class="svg-inline--fa fa-yin-yang fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg>
                    <span>Click here</span>
                </Center>
            </Container>
            {open ? <Intro click={open} /> : null}
        </HomeContainer>
    )
}

export default Home