import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container__footer-content">
        <div>
          <img src={logo} alt="Esplanad logo." className="footer-logo" />
        </div>
        <div className="container__footer-links">
          <a href="" className="footer-link">
            GDPR
          </a>
          <a href="" className="footer-link">
            Cookies
          </a>
          <a href="" className="footer-link">
            Jobba hos oss
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
