import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();
//wraps app and provides the data layer
export const StateProvider = ({ reducer, intialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);
//pulls info from the data layer
export const useStateValue = () => useContext(StateContext);