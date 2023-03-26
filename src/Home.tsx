import logo from "./assets/hero.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container__hero-content">
          <div className="hero-content">
            <h1>
              Espl<span>a</span>n<span>a</span>d
            </h1>
            <span className="subtitle">Förvaltning</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quaerat placeat voluptatum atque voluptates quibusdam esse aut
              possimus cumque, at non quia ea omnis nostrum iure facilis, rem
              ipsa odio.
            </p>
            <div className="container__hero-btns">
              <a className="hero-btn" href="">
                Be om offert
              </a>
              <a className="hero-btn" href="">
                Kontakta oss
              </a>
            </div>
            <div className="container__cards">
              <div className="stats-card">
                <b>80+</b>
                <p>förvaltade hus</p>
              </div>
              <div className="stats-card">
                <b>4500+</b>
                <p>hyresgäster</p>
              </div>
              <div className="stats-card">
                <b>30 000+</b>
                <p>nöjda kunder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Våra tjänster</h2>
        <div className="service">
          <div className="service-description">
            <div className="service-text">
              <h3>Fastighetsservice</h3>
              <p>
                Med kontinuerligt underhåll förbättras boende- och arbetsmiljön.
                Vi gör löpande besiktningar för att hålla efter fastigheterna
                invändigt och utvändigt. Snabba och kvalitativa reparationer är
                av stor betydelse för trivsel. Med våra resurser täcker vi alla
                tjänster som kan komma ifråga vad gäller underhåll.
              </p>
            </div>
          </div>
          <div className="service-img service-img-1"></div>
        </div>
        <div className="service">
          <div className="service-description">
            <div className="service-text">
              <h3>Ute- och innemiljö</h3>
              <p>
                En välskött utemiljö året om är viktig för att öka trivseln. Vi
                håller gräset välklippt, gårdar och gångstigar sopade,
                rabatterna snygga, häckar och buskar vältrimmade och tar även
                hand om bevattning och nyplanteringar om så önskas.Vi erbjuder
                också lövblåsning, halkbekämpning och snöröjning samt
                maskinsopning av parkeringsplatser och garage.
              </p>
            </div>
          </div>
          <div className="service-img service-img-2"></div>
        </div>
        <div className="service">
          <div className="service-description">
            <div className="service-text">
              <h3>Boendeservice</h3>
              <p>
                En välskött utemiljö året om är viktig för att öka trivseln. Vi
                håller gräset välklippt, gårdar och gångstigar sopade,
                rabatterna snygga, häckar och buskar vältrimmade och tar även
                hand om bevattning och nyplanteringar om så önskas.Vi erbjuder
                också lövblåsning, halkbekämpning och snöröjning samt
                maskinsopning av parkeringsplatser och garage.
              </p>
            </div>
          </div>
          <div className="service-img service-img-3"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
