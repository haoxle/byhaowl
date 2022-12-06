import "./Item.scss";

const Item = ({ candle, candleName, price, name }) => {
  return (
    <>
      <div className="product">
        <img className="product__candle" src={candle} alt={candleName} />
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
