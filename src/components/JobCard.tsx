import { useState } from 'react'
import logoJamespot from '../assets/logo-jamespot.png'
import {
    CardContainer,
    CardMainContainer,
    CardShadow,
    CardImgContainer,
    CardInfo,
} from '../styles/JobCard.style'

const JobCard: React.FC = () => {
    const [showCardInfo, setShowCardInfo] = useState(false)
    console.log('🚀 ~ file: JobCard.tsx ~ line 24 ~ showCardInfo', showCardInfo)

    return (
        <CardMainContainer>
            <CardShadow showCardInfo={showCardInfo}>
                <CardContainer
                    showCardInfo={showCardInfo}
                    onClick={(e) => {
                        e.preventDefault()
                        setShowCardInfo((prev) => !prev)
                    }}
                >
                    {!showCardInfo ? (
                        <CardImgContainer>
                            <img src={logoJamespot} alt="" height={'50%'} />
                            <span>JAMESPOT</span>
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
