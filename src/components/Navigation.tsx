import viteLogo from "/vite.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container__navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={viteLogo} alt="" />
          </Link>
        </div>
        <div className="container__links">
          <Link className="link" to="/">
            Hem
          </Link>
          <Link className="link" to="/offer">
            Offert
          </Link>
          <Link className="link" to="/issue-report">
            Felanmälan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
