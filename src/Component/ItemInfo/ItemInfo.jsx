import { Link, useParams } from "react-router-dom";
import "./ItemInfo.scss";

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

  return (
    <div>
      <div>
        <img src={src} alt={name} />
      </div>
      <div>
        <div>
          <Link to="/shop">Back to Shop</Link>
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{price}</h2>
        </div>
        <div>
          <p>
            <span>DESCRIPTION: </span>
            {description}
          </p>
          <p>
            <span>FRAGRANCE NOTES: </span>
            {fragranceNotes}
          </p>
        </div>
        <div>
          <p>
            <span>ID: </span>
            {id}
          </p>
          <p>
            <span>BURN TIME: </span>
            {burnTime}
          </p>
          <p>
            <span>BLEND: </span>
            {blend}
          </p>
          <p>
            <span>VESSEL: </span>
            {vessel}
          </p>
          <p>
            <span>WICK: </span>
            {wick}
          </p>
          <p>
            <span>WEIGHT: </span>
            {weight}
          </p>
          <p>
            <span>DIMENSION: </span>
            {dimension}
          </p>
          <p>
            <span>COLOUR: </span>
            {colour}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
