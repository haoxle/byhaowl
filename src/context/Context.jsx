import { useReducer } from "react";
import { createContext } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}> {props.children}</Cartcontext.Provider>
  );
};
