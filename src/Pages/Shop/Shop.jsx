import "./Shop.scss";
import { useEffect, useState } from "react";
import image from "../../data/image";
import Item from "../../Component/Item/Item";
import { getCandles } from "../../utils/apiUtils";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";

const Shop = () => {
  const [candles, setCandles] = useState([]);

  const getData = async () => {
    const candle = await getCandles();
    setCandles(candle);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = useContext(Cartcontext);
  console.log(globalState);
  const mapped = candles.map((c) => ({
    ...c,
    ...image.find((i) => i.name === c.name),
  }));
  const candle = mapped.map((item, i) => {
    return (
      <Item
        key={`${i} ${item.name}`}
        candle={item.src}
        candleName={item.name}
        price={item.price}
        name={item.name}
        id={item.id}
      />
    );
  });

  return (
    <>
      <div className="product-container">{candle}</div>
    </>
  );
};

export default Shop;
