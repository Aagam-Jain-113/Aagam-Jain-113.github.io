import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const LogoName = styled(NavLink)`
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
        <LogoName to="/" color={props.theme}>
            AJ
        </LogoName>
    )
}

export default Logo
