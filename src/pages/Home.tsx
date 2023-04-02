import React from "react";
import { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [charCount, setCharCount] = React.useState(0);

  // GSAP
  const heroRef = useRef(null);
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);
  useEffect(() => {
    const heroEl = heroRef.current;
    const titleEl1 = titleRef1.current;
    const titleEl2 = titleRef2.current;
    const cardEl1 = cardRef1.current;
    const cardEl2 = cardRef2.current;
    const cardEl3 = cardRef3.current;
    const iconEl1 = iconRef1.current;
    const iconEl2 = iconRef2.current;
    const serviceEl1 = serviceRef1.current;
    const serviceEl2 = serviceRef2.current;
    const serviceEl3 = serviceRef3.current;
    gsap.fromTo(
      heroEl,
      {
        x: "50%",
        opacity: 0,
      },
      {
        x: "",
        opacity: 1,
        duration: 3,
        ease: "expo",
      }
    );
    gsap.fromTo(
      titleEl1,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        delay: 0.4,
        y: "",
        opacity: 1,
        duration: 3,
        ease: "expo",
      }
    );
    gsap.fromTo(
      titleEl2,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        delay: 0.8,
        y: "",
        opacity: 1,
        duration: 3,
        ease: "expo",
      }
    );
    gsap.fromTo(
      cardEl1,
      {
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
        duration: 4,
        ease: "expo",
      }
    );
    gsap.fromTo(
      cardEl2,
      {
        opacity: 0,
      },
      {
        delay: 2.4,
        opacity: 1,
        duration: 4,
        ease: "expo",
      }
    );
    gsap.fromTo(
      cardEl3,
      {
        opacity: 0,
      },
      {
        delay: 2.8,
        opacity: 1,
        duration: 2,
        ease: "expo",
      }
    );
    gsap.fromTo(
      serviceEl1,
      {
        x: "10%",
        opacity: 0,
      },
      {
        x: "",
        opacity: 1,
        duration: 2,
        ease: "expo",
        scrollTrigger: {
          trigger: serviceEl1,
        },
      }
    );
    gsap.fromTo(
      serviceEl2,
      {
        x: "-10%",
        opacity: 0,
      },
      {
        x: "",
        opacity: 1,
        duration: 2,
        ease: "expo",
        scrollTrigger: {
          trigger: serviceEl2,
        },
      }
    );
    gsap.fromTo(
      serviceEl3,
      {
        x: "10%",
        opacity: 0,
      },
      {
        x: "",
        opacity: 1,
        duration: 4,
        ease: "expo",
        scrollTrigger: {
          trigger: serviceEl3,
        },
      }
    );
    gsap.fromTo(
      iconEl1,
      {
        scale: 0.2,
      },
      {
        scale: 1,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: iconEl1,
        },
      }
    );
    gsap.fromTo(
      iconEl2,
      {
        scale: 0.2,
      },
      {
        delay: 0.4,
        scale: 1,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: iconEl2,
        },
      }
    );
  }, []);

  // Autocounter
  // const counters = document.querySelectorAll(".count");
  // const speed = 200;

  // counters.forEach((counter) => {
  //   const updateCount = () => {
  //     const target = parseInt(counter.getAttribute("data-target"));
  //     const count = parseInt(counter.innerText);
  //     const increment = Math.trunc(target / speed);

  //     if (count < target) {
  //       counter.innerText = count + increment;
  //       setTimeout(updateCount, 1);
  //     } else {
  //       count.innerText = target;
  //     }
  //   };
  //   updateCount();
  // });

  return (
    <div className="home">
      <section className="hero">
        <div className="container__hero-content">
          <div ref={heroRef} className="hero-content">
            <h1>
              Espl<span ref={titleRef1}>a</span>n<span ref={titleRef2}>a</span>d
            </h1>
            <span className="subtitle">Förvaltning</span>
            <p>
              Din tjänsteleverantör inom teknisk förvaltning och
              fastighetsskötsel för din bostadsrättsförening, hyresfastighet,
              eller industrilokal.
            </p>
            <div className="container__hero-btns">
              <a className="hero-btn" href="/offer">
                Be om offert
              </a>
              <a className="hero-btn" href="#contact">
                Kontakta oss
              </a>
            </div>
            <div className="container__cards">
              <div ref={cardRef1} className="stats-card">
                <b>80+</b>
                {/* <b data-target="80" className="count">
                  0
                </b>
                <b>+</b> */}
                <p>förvaltade hus</p>
              </div>
              <div ref={cardRef2} className="stats-card">
                <b>4500+</b>
                {/* <b data-target="4500" className="count">
                  0
                </b>
                <b>+</b> */}
                <p>hyresgäster</p>
              </div>
              <div ref={cardRef3} className="stats-card">
                <b>30 000+</b>
                {/* <b data-target="30000" className="count">
                  0
                </b>
                <b>+</b> */}
                <p>nöjda kunder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <h2 className="services-title">Våra tjänster</h2>
        <div className="service">
          <div className="service-description">
            <div className="service-text">
              <h3>Fastighetsservice</h3>
              <p ref={serviceRef1}>
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
              <p ref={serviceRef2}>
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
              <p ref={serviceRef3}>
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

      <section className="contact-form" id="contact">
        <h2>
          Kontakta <span>Oss</span>
        </h2>
        <form action="https://formsubmit.co/ridderfalk@gmail.com" method="POST">
          <div className="container__contact">
            <div>
              <label htmlFor="name">
                Namn<span>*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="E.g. Anders Andersson"
                required
              />
            </div>

            <div>
              <label htmlFor="email">
                E-post<span>*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E.g. andersson@gmail.com"
                required
              />

              {/* FormSubmit config inputs */}
              <input
                type="hidden"
                name="_subject"
                value="Meddelande från Esplanad hemsida"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_autoresponse"
                value="Tack för ert meddelande! Ni kommer att bli kontaktade av Esplanad inom kort."
              ></input>
            </div>

            <div>
              <label htmlFor="message">
                Meddelande<span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                onChange={(e) => setCharCount(e.target.value.length)}
                maxLength={1000}
                placeholder="Skriv ditt meddelande här..."
                required
              />
              {charCount < 1000 && (
                <p className="input-error input-error-placeholder">.</p>
              )}
              {charCount >= 1000 && (
                <p className="input-error">
                  * Max längd på meddelandet är 1000 tecken.
                </p>
              )}
            </div>
            <button type="submit">Skicka</button>
          </div>
        </form>

        <div className="container__contact-info">
          <div className="contact-item">
            <img
              ref={iconRef1}
              className="icon"
              src="src/assets/phone-icon.png"
              alt=""
            />
            <div className="contact-item__info">
              <b>Telefon:</b>
              <p>031-7882800</p>
            </div>
          </div>
          <div className="contact-item">
            <img
              ref={iconRef2}
              className="icon"
              src="src/assets/email-icon.png"
              alt=""
            />
            <div className="contact-item__info">
              <b>E-post:</b>
              <a className="email-link" href="roger@esplanad.nu">
                info@esplanad.nu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
