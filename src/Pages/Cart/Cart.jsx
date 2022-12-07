import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.scss";

const Cart = () => {
  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  const flattened = state.flat(1);
  const sumPrices = flattened.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity;
  }, 0);

  const product = flattened.map((item, i) => {
    return (
      <div className="checkout-container">
        <img className="checkout-img" src={item.src} alt={item.name} />
        <h1 className="checkout-name">{item.name}</h1>
        <p className="checkout-price"> £{item.price * item.quantity}.00</p>
        <div className="checkout-quantity">
          <button
            className="checkout-quantity__btn"
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "DECREASE", payload: item });
              } else dispatch({ type: "REMOVE", payload: item });
            }}
          >
            -
          </button>
          <p className="checkout-quantity__num"> {item.quantity}</p>
          <button
            className="checkout-quantity__btn"
            onClick={() => dispatch({ type: "INCREASE", payload: item })}
          >
            +
          </button>
        </div>
        <button
          className="checkout-quantity__remove"
          onClick={() => dispatch({ type: "REMOVE", payload: item })}
        >
          Remove Item
        </button>
      </div>
    );
  });

  return (
    <div className="checkout-basket">
      {product}
      <div className="checkout-total">
        {" "}
        <h1 className="checkout-total__info">Total:</h1>
        <h1 className="checkout-total__amount">£{sumPrices}.00</h1>
        <button className="checkout-total__btn">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
