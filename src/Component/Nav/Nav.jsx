import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/news"}>News</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
    </div>
  );
};

export default Nav;
