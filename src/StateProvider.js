/* préparer les données à superoposer
et traquer le panier  */

import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext()

/* construire le provider */
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
)


export const useStateValue = () => useContext(StateContext)