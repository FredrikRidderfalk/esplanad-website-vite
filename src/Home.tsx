import logo from "./assets/hero.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Esplanad Förvaltning</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quaerat placeat voluptatum atque voluptates quibusdam esse aut
            possimus cumque, at non quia ea omnis nostrum iure facilis, rem ipsa
            odio.
          </p>
          <a className="hero-btn" href="">
            Be om offert
          </a>
          <a className="hero-btn" href="">
            Kontakta oss
          </a>
        </div>
      </section>

      <section className="services">
        <div className="service-1">
          <div className="service-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            aliquam molestiae accusantium reprehenderit voluptates blanditiis
            suscipit sed quod facilis, atque repudiandae iste eaque illo, rerum
            omnis, maxime distinctio sit. Accusamus.
          </div>
          <div className="service-img"></div>
        </div>
        <div className="service-2">
          <div className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            autem est id fugiat enim laudantium cum? Eos repudiandae numquam
            saepe possimus excepturi, nam iure sequi expedita totam perspiciatis
            quo nesciunt.
          </div>
          <div className="service-img"></div>
        </div>
        <div className="service-3">
          <div className="service-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non,
            quaerat repellat rerum error eos consequuntur autem tempore nulla?
            Adipisci labore tenetur blanditiis natus cupiditate maxime eius
            magni nulla nisi.
          </div>
          <div className="service-img"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
