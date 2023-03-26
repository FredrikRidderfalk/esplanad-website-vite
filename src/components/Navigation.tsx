import viteLogo from "/vite.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container__navbar-content">
        <div className="logo">
          <img src={viteLogo} alt="" />
        </div>
        <div className="container__links">
          <a className="link" href="">
            Hem
          </a>
          <a className="link" href="">
            Offert
          </a>
          <a className="link" href="">
            Felanmälan
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
