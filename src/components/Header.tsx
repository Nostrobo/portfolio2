import NavMobileButton from './NavMobileButton'
import { HeaderContainer, Logo } from '../styles/Header.style'
import logo from '../assets/logoHeddy2.png'
import useAppContext from '../AppContext'

function Header() {
    const { navOpen } = useAppContext()

    return (
        <>
            <HeaderContainer>
                <h1>
                    <Logo src={logo} alt="Heddy Amara" navOpen={navOpen} />
                </h1>
                <NavMobileButton />
            </HeaderContainer>
        </>
    )
}

export default Header
