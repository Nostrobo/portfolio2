import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useAppContext from '../AppContext'
import { NavButton, NavButtonIcon } from '../styles/NavMobilButton.style'

const NavMobileButton: React.FC = () => {
    const { fireAnimation, navOpen, CtxToggleNavOpen, CtxFireAnimation } =
        useAppContext()

    const toggleNav = () => {
        CtxFireAnimation()

        setTimeout(() => {
            CtxToggleNavOpen()
        }, 300)
    }

    return (
        <>
            <NavButton type="button" onClick={toggleNav}>
                {!navOpen ? (
                    <NavButtonIcon
                        size="3x"
                        icon={faBars}
                        fireanimation={!fireAnimation}
                    />
                ) : (
                    <NavButtonIcon
                        size="3x"
                        icon={faXmark}
                        fireanimation={fireAnimation}
                    />
                )}
            </NavButton>
        </>
    )
}

export default NavMobileButton
