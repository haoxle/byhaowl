import "./App.scss";
import Nav from "./Component/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import Shop from "./Pages/Shop/Shop";
import Logo from "./Component/Logo/Logo";
import ItemInfo from "./Component/ItemInfo/ItemInfo";
import { useEffect, useState } from "react";
import { getCandles } from "./utils/apiUtils";
import image from "./data/image";

const App = () => {
  const [candles, setCandles] = useState([]);

  const getData = async () => {
    const candle = await getCandles();
    setCandles(candle);
  };

  useEffect(() => {
    getData();
  }, []);

  const singleCandle = candles.map((c) => ({
    ...c,
    ...image.find((i) => i.name === c.name),
  }));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Logo />
            <Nav />
            <Home />
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            {" "}
            <Logo />
            <Nav />
            <News />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            {" "}
            <Logo />
            <Nav />
            <Shop />
          </>
        }
      />
      <Route
        path="/candle/:candleId"
        element={
          <>
            <Logo />
            <ItemInfo candles={singleCandle} />
          </>
        }
      />
    </Routes>
  );
};

export default App;
