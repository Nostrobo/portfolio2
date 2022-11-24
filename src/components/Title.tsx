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
        let offset = {
            x: 0,
            y: 0,
        }

        if (window.visualViewport) {
            offset = {
                x: window.visualViewport.width / 2,
                y: window.visualViewport.height / 2,
            }
        }
        window.addEventListener('mousemove', (e) => {
            getMouseValues(e, offset)
        })
        return () =>
            window.removeEventListener('mousemove', (e) => {
                getMouseValues(e, offset)
            })
    }, [])

    const getMouseValues = (
        e: MouseEvent,
        offset: {
            x: number
            y: number
        }
    ) => {
        setMousePosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        })
    }
    return (
        <StyledTitle id={id} {...mousePosition}>
            {text}
        </StyledTitle>
    )
}

export default Title
