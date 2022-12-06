import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink className="nav__title" to={"/"}>
        Home
      </NavLink>
      <NavLink className="nav__title" to={"/about"}>
        About
      </NavLink>
      <NavLink className="nav__title" to={"/news"}>
        News
      </NavLink>
      <NavLink className="nav__title" to={"/shop"}>
        Shop
      </NavLink>
    </div>
  );
};

export default Nav;
