import React, { createContext } from 'react';

// A New instace of React.createContext
export const Context = createContext();

/**
 * Function that configures the React.Provider configuration to resolve the state of the autentication around the app
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer
};
