import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <NavLink to="/terms" className="termsAndConditions">
        Terms and Conditions
      </NavLink>
    </div>
  );
};

export default Footer;
