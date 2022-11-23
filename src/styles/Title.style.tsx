import styled from 'styled-components'
import { MousePositionType } from '../types/types'

export const StyledTitle = styled.p<MousePositionType>`
    background: radial-gradient(
        circle,
        rgba(90, 90, 90, 1) 0%,
        rgba(0, 0, 0, 1) 100%,
        rgba(38, 54, 133, 0) 100%
    );
    color: white;
    cursor: none;
    font-size: 48px;
    font-family: 'Bebas Neue', cursive;
    padding: 0px 32px;
    margin: 16px;
    box-shadow: ${(props) => -props.x / 40}px ${(props) => -props.y / 40}px 1px
        black;
    border: 2px solid white;
    text-align: center;
    transform: rotateY(${(props) => props.x / 25}deg)
        rotateX(${(props) => -props.y / 25}deg)
        translateX(${(props) => -props.x / 50}px)
        translateY(${(props) => -props.y / 50}px);
    rotate: ${(props) => props.x / 100}deg;
`
