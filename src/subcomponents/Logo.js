import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const LogoName = styled.h1`
color: ${props=> props.color === "dark" ? darkTheme.text : darkTheme.body};
display: inline-block;
position: fixed;
left: 2rem;
top: 2rem;
font-weight: bolder;
font-size: 2rem;
z-index: 3;
`

function Logo(props) {
    return (
        <LogoName color={props.theme}>
            AJ
        </LogoName>
    )
}

export default Logo
