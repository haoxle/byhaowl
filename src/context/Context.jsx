import { createContext } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const state = 8;
  return (
    <Cartcontext.Provider value={state}> {props.children}</Cartcontext.Provider>
  );
};
