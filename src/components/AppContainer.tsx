import Header from './Header'
import NavMobil from './NavMobil'
import { MainContainer } from '../styles/App.style'
import React from 'react'
import useAppContext from '../AppContext'
import Home from './Home'

const AppContainer: React.FC = () => {
    const { navOpen } = useAppContext()
    return (
        <>
            {navOpen ? (
                //this double navMobil is used for animation, the first is dispalyed, the second is at opacity 0 and visibility hidden and so the transition can work
                <NavMobil />
            ) : (
                <NavMobil />
            )}
            <MainContainer>
                <Header />
                <Home />
            </MainContainer>
        </>
    )
}

export default AppContainer
