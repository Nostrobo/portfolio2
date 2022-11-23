import { keyframes } from 'styled-components'

export const boxShadowAnimation = keyframes`
    0%{
        box-shadow: 10px 10px 1px black;
    }
    25%{
        box-shadow: 5px 8px 1px black;
    }
    50%{
        box-shadow: 8px 4px 1px black;
    }
    75%{
        box-shadow: 5px 2px 1px black;
    }
    100%{
        box-shadow: 10px 10px 1px black;
    }
`

export const fadeIn = keyframes`
from{
    opacity:0%
}
to{
    opacity:100%
}

`
