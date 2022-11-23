import useAppContext from '../AppContext'
import { NavContainer } from '../styles/NavMobil.style'
import { NavLink } from '../styles/NavMobil.style'

const NavMobil: React.FC = () => {
    const { navOpen, CtxFireAnimation, CtxToggleNavOpen } = useAppContext()

    const toggleNav = () => {
        CtxFireAnimation()

        setTimeout(() => {
            CtxToggleNavOpen()
        }, 300)
    }

    return (
        <NavContainer navOpen={navOpen}>
            <NavLink to="#home" onClick={toggleNav}>
                HOME
            </NavLink>
            <NavLink to="#about" onClick={toggleNav}>
                ABOUT ME
            </NavLink>
            <NavLink to="#work" onClick={toggleNav}>
                MY WORK
            </NavLink>
            <NavLink to="#contact" onClick={toggleNav}>
                CONTACT
            </NavLink>
        </NavContainer>
    )
}

export default NavMobil
