import "./Logo.scss";
import haoxle from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import bag from "../../Assets/shopping-bag.png";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
const Logo = () => {
  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const getQuantity = () => {
    if (state.length === 0) {
      return "";
    } else return state.length;
  };
  return (
    <NavLink className="logoNav" to="/">
      <div className="logo-container">
        <div className="logo-container__img">
          <img className="byHaowl-logo" src={haoxle} alt="logo" />
        </div>{" "}
        <button className="basket">
          <NavLink to={"/cart"}>
            {" "}
            <img
              className="shopping-basket"
              src={bag}
              alt="shopping cart"
            />{" "}
          </NavLink>
          <div className="shopping-quantity">{getQuantity()}</div>
        </button>
      </div>
    </NavLink>
  );
};

export default Logo;
