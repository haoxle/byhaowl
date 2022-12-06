import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ candle, candleName, price, name, id }) => {
  return (
    <>
      <div className="product">
        <Link to={`/candle/${id}`}>
          <img className="product__candle" src={candle} alt={candleName} />
        </Link>
        <div className="product__info">
          <h1 className="product__info--price">£{price}.00</h1>
          <h1 className="product__info--name">{name}</h1>
        </div>
        <button className="product__bag">Add to Bag</button>
      </div>
    </>
  );
};
export default Item;
