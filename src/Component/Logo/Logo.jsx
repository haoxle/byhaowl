import "./Logo.scss";
import haoxle from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <NavLink className="logoNav" to="/">
      <div className="logo-container">
        <img className="byHaowl-logo" src={haoxle} alt="logo" />
        {/* <h1 className="byHaowl-title">byHaowl</h1> */}
      </div>
    </NavLink>
  );
};

export default Logo;
