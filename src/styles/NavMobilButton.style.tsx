import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavButtonIconProps } from '../types/types'

export const NavButton = styled.button`
    width: 80px;
    background-color: transparent;
    border: none;
    z-index: 9999;
    position: fixed;
    right: 10px;
    top: 30px;
`

export const NavButtonIcon = styled(FontAwesomeIcon)<NavButtonIconProps>`
    transition: 0.3s ease;
    rotate: ${(props) => (props.fireanimation ? '0deg' : '180deg')};
    opacity: ${(props) => (props.fireanimation ? '1' : '0')};
    color: ${(props) => (props.navOpen ? 'white' : 'black')};
`
