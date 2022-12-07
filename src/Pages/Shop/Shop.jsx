import "./Shop.scss";
import { useEffect, useState } from "react";
import image from "../../data/image";
import Item from "../../Component/Item/Item";
import { getCandles } from "../../utils/apiUtils";
import Search from "../../Component/Search/Search";

const Shop = () => {
  const [candles, setCandles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getData = async () => {
    const candle = await getCandles();
    setCandles(candle);
  };
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getData();
  }, []);

  const mapped = candles.map((c) => ({
    ...c,
    ...image.find((i) => i.name === c.name),
  }));

  const filteredCandle = mapped.filter((candle) => {
    if (candle.vessel.toLowerCase().includes(searchTerm.toLowerCase())) {
      return candle.vessel.toLowerCase().includes(searchTerm.toLowerCase());
    } else return candle.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const candle = filteredCandle.map((item, i) => {
    return (
      <>
        <Item
          key={`${i} ${item.name}`}
          candle={item.src}
          candleName={item.name}
          price={item.price}
          name={item.name}
          id={item.id}
        />
      </>
    );
  });

  return (
    <>
      <Search handleInput={handleInput} searchTerm={searchTerm} />

      <div className="product-container">{candle}</div>
    </>
  );
};

export default Shop;
