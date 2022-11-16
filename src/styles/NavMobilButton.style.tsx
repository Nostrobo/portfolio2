import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavButtonIconProps} from "../types/types"

export const NavButton = styled.button`
    width : 80px;
    background-color: transparent;
    border: none; 
`

export const NavButtonIcon = styled(FontAwesomeIcon) <NavButtonIconProps>`
    transition: .3s ease;
    rotate: ${props => props.fireanimation ? "0deg" : "180deg"};
    opacity: ${props => props.fireanimation ? "1" : "0"}; 
`