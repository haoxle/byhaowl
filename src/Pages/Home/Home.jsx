import "./Home.scss";
import me from "../../Assets/mepop.png";
import img1 from "../../Assets/box.JPG";
import img2 from "../../Assets/candle.JPG";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__img">
          <img className="profile__img" src={me} alt="me" />
        </div>
        <div className="profile__desc">
          I’m a ceramicist, candlemaker, software developer and pharmacist
          working in London. I make candles and will inevitably specialise in
          ceramic candles with multipurpose. Work is sold through my online shop
          only, unless stated otherwise.
          <br></br> If you're interested in obtaining my work, please have a
          look at my &nbsp;
          <a
            href="https://www.instagram.com/byhaowl/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
          &nbsp; or my shop for regular updates
        </div>
      </div>

      <div className="work">
        <div className="work-img">
          <img className="work-img__img" src={img1} alt="work" />
          <img className="work-img__img2" src={img2} alt="work" />
        </div>
        <div className="work-info">
          <h1>
            THE FEEL OF PERSONALISATION, <br></br>WITH UNIQUE DESIGNS
          </h1>
          <NavLink to={"/shop"} className="shop-link">
            Full Range
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
