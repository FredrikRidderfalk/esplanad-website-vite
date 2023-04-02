import "./Career.css";

function Career() {
  return (
    <div className="career">
      <div className="container__career-content">
        <div className="career-content">
          <img src="../../public/assets/career.jpg" alt="" />
          <h2>Lediga tjänster</h2>
          <p>
            Vi är alltid intresserade av att komma i kontakt med ambitiösa och
            professionella medarbetare. Skicka gärna in ditt CV till oss på{" "}
            <a className="email-link" href="roger@esplanad.nu">
              info@esplanad.nu
            </a>{" "}
            så kontaktar vi dig om det dyker upp en tjänst vi tror skulle passa
            dig.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;
