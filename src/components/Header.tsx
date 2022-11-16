import NavMobileButton from './NavMobileButton'
import { HeaderContainer, Logo } from '../styles/Header.style'
import logo from '../assets/logoHeddy2.png'

function Header() {
    return (
        <>
            <HeaderContainer>
                <h1>
                    <Logo src={logo} alt="Heddy Amara" />
                </h1>
                <NavMobileButton />
            </HeaderContainer>
        </>
    )
}

export default Header
