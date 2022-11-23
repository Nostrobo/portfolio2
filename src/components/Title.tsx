import { StyledTitle } from '../styles/Title.style'
import { MousePositionType } from '../types/types'
import { useEffect, useState } from 'react'

const Title: React.FC<{ text: string; id: string }> = ({
    text,
    id,
}): JSX.Element => {
    const [mousePosition, setMousePosition] = useState<MousePositionType>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        let elem: HTMLElement | null = document.getElementById(id)
        let elemPosition: DOMRect
        if (elem) {
            elemPosition = elem.getBoundingClientRect()
        }
        window.addEventListener('mousemove', (e) => {
            getMouseValues(e, elemPosition)
        })
        return () =>
            window.removeEventListener('mousemove', (e) => {
                getMouseValues(e, elemPosition)
            })
    }, [])

    const getMouseValues = (e: MouseEvent, elemPosition: DOMRect) => {
        setMousePosition({
            x: e.clientX - elemPosition.x,
            y: e.clientY - elemPosition.y,
        })
    }
    return (
        <StyledTitle id={id} x={mousePosition.x} y={mousePosition.y}>
            {text}
        </StyledTitle>
    )
}

export default Title
