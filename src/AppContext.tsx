import React, { PropsWithChildren, useContext, useReducer } from 'react'
import { initialState, reducer } from './Reducers/Reducer'
import { InitialStateType } from './types/types'

const AppContext = React.createContext<InitialStateType>(initialState)

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const CtxToggleNavOpen = () => {
        dispatch({ type: 'TOGGLE_NAV_OPEN', payload: state.navOpen })
    }
    const CtxFireAnimation = () => {
        dispatch({ type: 'FIRE_ANIMATION', payload: state.fireAnimation })
    }

    const value = {
        fireAnimation: state.fireAnimation,
        navOpen: state.navOpen,
        dispatch: dispatch,
        CtxToggleNavOpen,
        CtxFireAnimation,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default function useAppContext() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('appcontext not available')
    }
    return context
}

export { AppContext, AppProvider }
