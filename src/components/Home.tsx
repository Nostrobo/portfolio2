import styled from 'styled-components'
import Title from './Title'
import SubTitle from './SubTitle'

const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HomeDescription = styled.p`
    font-family: 'Questrial', sans-serif;
    text-align: center;
    line-height: 24px;
    color: black;
    > span {
        rotate: -5deg;
        padding: 0 4px;
        color: white;
        background: radial-gradient(
            circle,
            rgba(90, 90, 90, 1) 0%,
            rgba(0, 0, 0, 1) 100%,
            rgba(38, 54, 133, 0) 100%
        );
        font-family: 'Bebas Neue', cursive;
    }
`

const Home: React.FC = () => {
    return (
        <HomeContainer id="home">
            <h2>
                <Title id={'title1'} text="HEDDY" />
                <Title id={'title2'} text="AMARA" />
                <SubTitle text="FRONT END WEB DEVELOPER" />
            </h2>
            <HomeDescription>
                Welcome to my Portfolio!
                <br />
                I'm Heddy, I'm a french <br />{' '}
                <span>
                    <strong>creative front end developer.</strong>
                </span>
                <br /> I like making beautiful designs and great user
                experiences!
            </HomeDescription>
        </HomeContainer>
    )
}

export default Home
