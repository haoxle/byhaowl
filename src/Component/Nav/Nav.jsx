import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink className="nav__title" to={"/"}>
        Home
      </NavLink>
      <NavLink className="nav__title" to={"/affirm"}>
        Words of Affirmation
      </NavLink>
      <NavLink className="nav__title" to={"/shop"}>
        Shop
      </NavLink>
      {/* <NavLink className="nav__title" to={"/candletool"}>
        Candle Tool
      </NavLink> */}
    </div>
  );
};

export default Nav;
