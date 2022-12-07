import { Link, useParams } from "react-router-dom";
import "./ItemInfo.scss";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
const ItemInfo = ({ candles }) => {
  const { candleId } = useParams();

  const currentCandle = candles.filter(
    (candle) => candle.id === parseFloat(candleId)
  );
  const {
    src,
    name,
    price,
    description,
    fragranceNotes,
    id,
    burnTime,
    blend,
    vessel,
    wick,
    dimension,
    weight,
    colour,
  } = currentCandle[0];

  const globalState = useContext(Cartcontext);
  const dispatch = globalState.dispatch;
  console.log(globalState);
  currentCandle.quantity = 1;
  return (
    <div className="candleInfo-container">
      <div className="image-container">
        <img className="image-container__candle" src={src} alt={name} />
      </div>
      <div className="information-container">
        <div className="link-container">
          <Link className="link-container__back" to="/shop">
            Back to Shop
          </Link>
          <button
            //or currentCandle?
            onClick={() => dispatch({ type: "ADD", payload: currentCandle })}
            className="link-container__bag"
          >
            Add to Bag
          </button>
        </div>
        <div className="productMain">
          <h1 className="productMain__name">{name}</h1>
          <h2 className="productMain__price">£{price}.00</h2>
        </div>
        <div className="productDesc">
          <p>
            <span>
              DESCRIPTION: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;
            </span>
            {description}
          </p>
          <p>
            <span>FRAGRANCE NOTES: &nbsp;&nbsp;&nbsp;</span>
            {fragranceNotes}
          </p>
        </div>
        <div className="productMisc">
          <p>
            <span>ID: &nbsp;&nbsp;</span>
            {id}
          </p>
          <p>
            <span>BURN TIME:&nbsp;&nbsp; </span>
            {burnTime}
          </p>
          <p>
            <span>BLEND: &nbsp;&nbsp;</span>
            {blend}
          </p>
          <p>
            <span>VESSEL: &nbsp;&nbsp;</span>
            {vessel}
          </p>
          <p>
            <span>WICK: &nbsp;&nbsp;</span>
            {wick}
          </p>
          <p>
            <span>WEIGHT: &nbsp;&nbsp;</span>
            {weight} 200kg
          </p>
          <p>
            <span>DIMENSION:&nbsp;&nbsp; </span>
            {dimension}
          </p>
          <p>
            <span>COLOUR: &nbsp;&nbsp;</span>
            {colour}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
