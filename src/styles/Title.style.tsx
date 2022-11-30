import styled from 'styled-components'
import { MousePositionType } from '../types/types'

export const StyledTitle = styled.p.attrs<MousePositionType>((props) => ({
    style: {
        boxShadow: `${-props.x / 20}px  ${-props.y / 20}px 0px black`,
        transform: `rotateY(${props.x / 25}deg)
                    rotateX(${-props.y / 25}deg)
                    translateX(${-props.x / 50}px)
                    translateY(${-props.y / 50}px)`,
        rotate: `${props.x / 100}deg`,
    },
}))`
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
        black;
    border: 1px solid white;
    text-align: center;

`
