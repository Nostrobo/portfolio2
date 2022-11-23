import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { NavContainerType } from '../types/types'

export const NavContainer = styled.div<NavContainerType>`
    transition: .3s;
    position : fixed;
    width:100%
    height : 100vh;
    top: 0;
    bottom: 0;
    left:0;
    right:0;
    background: radial-gradient(circle, rgba(90,90,90,1) 0%, rgba(0,0,0,1) 100%, rgba(38,54,133,0) 100%);
    z-index:9990;
    color:white;
    opacity : ${(props) => (props.navOpen ? '1' : '0')};
    visibility : ${(props) => (props.navOpen ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    padding: 20% 0%;
    `

export const NavLink = styled(Link)`
    width: 40%;
    background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 55%,
        rgba(230, 230, 230, 1) 100%
    );
    color: black;
    text-align: center;
    text-decoration: none;
    font-family: 'Bebas Neue', cursive;
    font-size: 40px;
    rotate: -5deg;
    box-shadow: 10px 10px 1px white;
    border: 2px solid black;
`
