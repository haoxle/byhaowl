import "./Shop.scss";
import musk from "../../Assets/musk.jpg";
import { useEffect, useState } from "react";
const Shop = () => {
  const [candles, setCandles] = useState([]);

  const getCandles = async () => {
    const response = await fetch("http://localhost:8080/candles");
    const data = await response.json();
    setCandles(data);
  };

  useEffect(() => {
    getCandles();
  }, []);

  const candle = candles.map((item) => {
    return <h1>{item.name}</h1>;
  });

  return (
    <>
      {candle}
      <div className="product-main">
        <div>
          <img className="musk-candle" src={musk} alt="musk" />
        </div>
        <div className="musk-price">
          <h1>Musk Cloud Jar</h1>
          <h2>£20.99</h2>
          <p>
            Fragrance Notes: Top: Almond, Peach. Mid: Milk Jasmine, Frangipani.
            Base: Vanilla, Sandalwood, Cedarwood Top note is the initial
            impression of the fragrance, middle note is the main body of the
            scent and base is its final impression.
          </p>
          <button>Add to Basket</button>
        </div>
      </div>
      <div className="musk-description">
        <div>
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            fugiat ipsam! Soluta placeat facilis ipsa eligendi maxime cum
            voluptates alias sed earum. Nesciunt, distinctio cupiditate velit
            neque officia ut eveniet?
          </p>
        </div>
        <div className="information-section">
          <table className="musk-information">
            <tr>
              <th>Specification</th>
              <th></th>
            </tr>
            <tr>
              <td>Item Number</td>
              <td>ID</td>
            </tr>
            <tr>
              <td>Burn Time</td>
              <td>20-40 hours</td>
            </tr>
            <tr>
              <td>Blend</td>
              <td>Soy Wax</td>
            </tr>
            <tr>
              <td>Scent</td>
              <td>Musk Cloud</td>
            </tr>
            <tr>
              <td>Vessel</td>
              <td>Glass</td>
            </tr>
            <tr>
              <td>Wick</td>
              <td>Wood</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>200g Approx</td>
            </tr>
            <tr>
              <td>Dimension</td>
              <td> 10cm x 10cm</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>Off White</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Shop;
