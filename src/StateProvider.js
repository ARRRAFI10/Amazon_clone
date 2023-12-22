// StateProvider.js
import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const StateContext = createContext();

// Provide the context using a higher-order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook to use the context
export const useStateValue = () => useContext(StateContext);
