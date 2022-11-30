import styled from 'styled-components'
import { FormButtonType } from '../types/types'

export const FormInputContainer = styled.div`
    > div {
        widht: 100%;
        text-align: center;
        display: flex;
        > div {
            align-self: center;
            background-color: black;
            padding: 20px;
        }
    }
`

export const StyledInput = styled.input`
    transition: 0.3s;
    width: 80%;
    padding: 16px;
    font-size: 16px;
    outline: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    font-family: 'Questrial', sans-serif;

    &:focus {
        border: 2px solid black;
        box-shadow: 4px 4px 1px black;
    }
`

export const StyledTextarea = styled.textarea`
    transition: 0.3s;
    height: 130px;
    width: 100%;
    border-bottom: 2px solid black;
    background-color: transparent;
    font-family: 'Questrial', sans-serif;
    font-size: 16px;

    &:focus {
        border: 2px solid black;
        box-shadow: 4px 4px 1px black;
        outline: none;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
`

export const FormButton = styled.button<FormButtonType>`
    flex-basis: 50%;
    color: white;
    background: radial-gradient(
        circle,
        rgba(90, 90, 90, 1) 0%,
        rgba(0, 0, 0, 1) 100%,
        rgba(38, 54, 133, 0) 100%
    );
    font-family: 'Bebas Neue', cursive;
    font-size: 32px;
    width: 50%;
    align-self: end;
    opacity: ${(props) => (props.disableButton ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disableButton ? 'none' : 'all')};
`
