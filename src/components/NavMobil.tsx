import useAppContext from '../AppContext'
import { NavContainer } from '../styles/NavMobil.style'
import { NavLink } from '../styles/NavMobil.style'

const NavMobil: React.FC = () => {
    const { navOpen } = useAppContext()

    return (
        <NavContainer navOpen={navOpen}>
            <NavLink to="/pathLink#home">HOME</NavLink>
            <NavLink to="/pathLink#work">MY WORK</NavLink>
            <NavLink to="/pathLink#about">ABOUT ME</NavLink>
            <NavLink to="/pathLink#contact">CONTACT</NavLink>
        </NavContainer>
    )
}

export default NavMobil
