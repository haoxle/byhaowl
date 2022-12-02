import "./Logo.scss";
import haoxle from "../../Assets/logo.png";
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="byHaowl-logo" src={haoxle} alt="logo" />
      <h1 className="byHaowl-title">byHaowl</h1>
    </div>
  );
};

export default Logo;
