import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container__footer-content">
        <div className="container__logo-address">
          <img src={logo} alt="Esplanad logo." className="footer-logo" />
          <div className="container__address">
            <p>Datavägen 12B</p>
            <p>436 32 Askim</p>
          </div>
        </div>
        <div className="container__footer-links">
          <Link to="/gdpr" className="footer-link">
            GDPR
          </Link>
          <Link to="/cookies" className="footer-link">
            Cookies
          </Link>
          <Link to="/career" className="footer-link">
            Jobba hos oss
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
