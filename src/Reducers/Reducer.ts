import { ActionType, InitialStateType, ActionsType } from '../types/types'

export const initialState: InitialStateType = {
    navOpen: false,
    fireAnimation: false,
    CtxFireAnimation: () => null,
    CtxToggleNavOpen: () => null,
}

const actions: ActionsType = {
    TOGGLE_NAV_OPEN: 'TOGGLE_NAV_OPEN',
    FIRE_ANIMATION: 'FIRE_ANIMATION',
    INCREMENT: 'INCREMENT',
}

export const reducer = (state: InitialStateType, action: ActionType): any => {
    const { type, payload } = action

    switch (type) {
        case actions.TOGGLE_NAV_OPEN:
            return { ...state, navOpen: !payload }
        case actions.FIRE_ANIMATION:
            return { ...state, fireAnimation: !payload }
        default:
            throw new Error(`L'action ${action} n'existe pas`)
    }
}
