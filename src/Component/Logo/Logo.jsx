import "./Logo.scss";
import haoxle from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import bag from "../../Assets/shopping-bag.png";
const Logo = () => {
  return (
    <NavLink className="logoNav" to="/">
      <div className="logo-container">
        <div className="logo-container__img">
          <img className="byHaowl-logo" src={haoxle} alt="logo" />
        </div>
        <button className="basket">
          <img className="shopping-basket" src={bag} alt="shopping cart" />
          <div className="shopping-quantity">1</div>
        </button>
      </div>
    </NavLink>
  );
};

export default Logo;
