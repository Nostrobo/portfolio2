export type ActionsType = {
    TOGGLE_NAV_OPEN: string
    FIRE_ANIMATION: string
    INCREMENT: string
}

export type ActionType = {
    type: string
    payload?: any
}

export interface InitialStateType {
    navOpen: boolean
    fireAnimation: boolean
    CtxFireAnimation: Function
    CtxToggleNavOpen: Function
}

export type NavButtonIconProps = {
    fireanimation: boolean
    navOpen: boolean
}

export type LogoType = {
    navOpen: boolean
}

export type NavContainerType = {
    navOpen: boolean
}
