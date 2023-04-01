import viteLogo from "/vite.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container__navbar-content">
        <div className="logo">
          <a href="/">
            <img src={viteLogo} alt="" />
          </a>
        </div>
        <div className="container__links">
          <a className="link" href="/">
            Hem
          </a>
          <a className="link" href="/offer">
            Offert
          </a>
          <a className="link" href="/issue-report">
            Felanmälan
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
