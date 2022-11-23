import styled from 'styled-components'
import { fadeIn } from '../styles/animations.style'
import { CardAnimationType } from '../types/types'

export const CardContainer = styled.div<CardAnimationType>`
    width: 100%;
    height: 230px;
    display: flex;
    background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 55%,
        rgba(230, 230, 230, 1) 100%
    );
    transition: 0.3s ease;
    rotate: ${(props) => (props.showCardInfo ? '12deg' : '0')};
    border: ${(props) => (props.showCardInfo ? ' 2px solid black' : null)};
    text-align: center;
`
export const CardShadow = styled.div<CardAnimationType>`
    width: 80%;
    height: 230px;
    margin: 48px;
    background: radial-gradient(
        circle,
        rgba(90, 90, 90, 1) 0%,
        rgba(0, 0, 0, 1) 100%,
        rgba(38, 54, 133, 0) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    rotate: ${(props) => (props.showCardInfo ? '-24deg' : '0')};
`

export const CardInfo = styled.div<CardAnimationType>`
    transition: 0.3s ease;
    rotate: ${(props) => (props.showCardInfo ? '12deg' : '0')};
    padding: 10%;
    opacity: 0;
    animation: ${fadeIn} 0.3s 0.2s ease forwards;
    height: 230px;

    > p {
        font-size: 0.9em;
        padding: 4px;
    }
`
export const CardMainContainer = styled.div`
    font-family: 'Questrial', sans-serif;
    width: 100%;
    max-height: 320px;
    display: flex;
    justify-content: center;
`

export const CardImgContainer = styled.div`
    color: white;
    border: 2px solid black;
    background: radial-gradient(
        circle,
        rgba(145, 145, 145, 1) 0%,
        rgba(37, 37, 37, 1) 54%,
        rgba(0, 0, 0, 1) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 230px;
    > span {
        font-size: 0.9rem;
    }
`
