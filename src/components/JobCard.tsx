import styled from 'styled-components'
import { fadeIn } from '../styles/animations.style'
import { useState } from 'react'
import logoJamespot from '../assets/logo-jamespot.png'

type CardAnimationType = {
    showCardInfo: boolean
}

const CardContainer = styled.div<CardAnimationType>`
    width: 100%;
    height: 100%;
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
const CardShadow = styled.div<CardAnimationType>`
    margin: 15%;
    width: 80%;
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

const CardInfo = styled.div<CardAnimationType>`
    transition: 0.3s ease;
    rotate: ${(props) => (props.showCardInfo ? '12deg' : '0')};
    padding: 10%;
    opacity: 0;
    animation: ${fadeIn} 0.3s 0.2s ease forwards;
`
const CardMainContainer = styled.div`
    font-family: 'Questrial', sans-serif;
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
`

const CardImgContainer = styled.div`
    background: radial-gradient(
        circle,
        rgba(226, 225, 225, 1) 0%,
        rgba(204, 204, 204, 1) 77%,
        rgba(185, 185, 185, 1) 100%
    );
    height: 100%;
    width: 100%;
`

const JobCard: React.FC = () => {
    const [showCardInfo, setShowCardInfo] = useState(false)
    console.log('🚀 ~ file: JobCard.tsx ~ line 24 ~ showCardInfo', showCardInfo)

    return (
        <CardMainContainer>
            <CardShadow showCardInfo={showCardInfo}>
                <CardContainer
                    showCardInfo={showCardInfo}
                    onClick={() => setShowCardInfo((prev) => !prev)}
                >
                    {!showCardInfo ? (
                        <CardImgContainer>
                            <img src={logoJamespot} alt="" width={'90%'} />
                        </CardImgContainer>
                    ) : (
                        <CardInfo showCardInfo={showCardInfo}>
                            <h3>Jamespot</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Omnis pariatur ducimus ab quam
                                voluptatem earum sit quisquam, reprehenderit hic
                                quos, quod facilis harum odit ratione. Facere
                                laudantium magni sit soluta?
                            </p>
                        </CardInfo>
                    )}
                </CardContainer>
            </CardShadow>
        </CardMainContainer>
    )
}

export default JobCard
