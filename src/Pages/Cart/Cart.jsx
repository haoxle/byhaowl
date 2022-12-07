import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.scss";

const Cart = () => {
  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  const flattened = state.flat(1);
  const sumPrices = flattened.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const product = flattened.map((item, i) => {
    return (
      <div className="checkout-container">
        <img className="checkout-img" src={item.src} alt={item.name} />
        <h1 className="checkout-name">{item.name}</h1>
        <p className="checkout-price"> £{item.price}.00</p>
        <div>
          <button>+</button>
          <p>{item.quantity}</p> <button>-</button>
        </div>
        <h2>remove item</h2>
      </div>
    );
  });

  console.log(product);

  return (
    <div className="checkout-basket">
      {product}
      <div className="checkout-total">
        {" "}
        <h1 className="checkout-total__info">Total:</h1>
        <h1 className="checkout-total__amount">£{sumPrices}.00</h1>
      </div>
    </div>
  );
};

export default Cart;
