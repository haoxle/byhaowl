import { useReducer } from "react";
import { createContext } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const checkDuplicates = (arr) => {
    const valueArr = arr.map((item) => {
      return item.name;
    });
    const isDuplicate = valueArr.some((item, idx) => {
      console.log(item);
      return valueArr.indexOf(item) === idx;
    });

    console.log(isDuplicate);
    return isDuplicate;
  };
  const reducer = (state, action) => {
    const flattened = state.flat(1);
    const increase = flattened.map((item) => {
      if (item.stock === item.quantity) {
        return item;
      }
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else return item;
    });
    const remove = flattened.filter((item) => item.id !== action.payload.id);
    const decrease = flattened.map((item) => {
      if (item.quantity === 0) {
        return item;
      }
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else return item;
    });

    switch (action.type) {
      case "ADD":
        if (checkDuplicates(flattened)) {
          return flattened;
        } else return [...flattened, action.payload];
      case "INCREASE":
        return [increase];
      case "DECREASE":
        return [decrease];
      case "REMOVE":
        return remove;
      default:
        return flattened;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}> {props.children}</Cartcontext.Provider>
  );
};
