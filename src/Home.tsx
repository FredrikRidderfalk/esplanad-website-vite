import logo from "./assets/hero.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Esplanad Förvaltning</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quaerat placeat voluptatum atque voluptates quibusdam esse aut
            possimus cumque, at non quia ea omnis nostrum iure facilis, rem ipsa
            odio.
          </p>
          <a className="hero-btn" href="">
            Button 1
          </a>
          <a className="hero-btn" href="">
            Button 2
          </a>
        </div>
        {/* <img className="hero-img" src={logo} alt="A tall building." /> */}
      </div>
    </div>
  );
}

export default Home;
